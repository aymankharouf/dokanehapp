import React, { useContext, useMemo } from 'react'
import { Block, Page, Navbar, List, ListItem, Toolbar, Badge } from 'framework7-react'
import BottomToolbar from './bottom-toolbar'
import { StoreContext } from '../data/store'
import PackImage from './pack-image'
import moment from 'moment'
import labels from '../data/labels'

const OtherOffers = props => {
  const { state } = useContext(StoreContext)
  const pack = useMemo(() => state.packs.find(p => p.id === props.id)
  , [state.packs, props.id])
  const offers = useMemo(() => {
    const productPack = state.products.find(p => p.id === pack.productId)
    let offers = state.packs.filter(p => state.products.find(pr => pr.id === p.productId && pr.categoryId === productPack.categoryId) && (p.isOffer || p.offerEnd))
    offers = offers.filter(p => p.id !== pack.id && p.price > 0)
    return offers.sort((p1, p2) => p1.price - p2.price)
  }, [state.packs, pack, state.products]) 
  return(
    <Page>
      <Navbar title={labels.offers} backLink={labels.back} />
      <Block>
        <List mediaList>
          {offers.map(p => {
            const productInfo = state.products.find(pr => pr.id === p.productId)
            return (
              <ListItem
                link={`/pack/${p.id}`}
                title={productInfo.name}
                subtitle={p.name}
                text={`${labels.productOf} ${state.countries.find(c => c.id === productInfo.countryId).name}`}
                footer={p.offerEnd ? `${labels.offerUpTo}: ${moment(p.offerEnd.toDate()).format('Y/M/D')}` : ''}
                after={(p.price / 1000).toFixed(3)}
                key={p.id}
              >
                <PackImage slot="media" pack={p} type="list" />
                {productInfo.isNew ? <Badge slot="title" color="red">{labels.new}</Badge> : ''}
                {p.isOffer ? <Badge slot="title" color='green'>{labels.offer}</Badge> : ''}
                {state.customer.storeId && state.storePacks.find(pa => pa.storeId === state.customer.storeId) ? 
                  <Badge slot="footer" color='green'> 
                    {labels.myPrice} {(state.storePacks.find(pa => pa.storeId === state.customer.storeId).price / 1000).toFixed(3)} 
                  </Badge> 
                : ''}
              </ListItem>
            )
          })}
        </List>
      </Block>
      <Toolbar bottom>
        <BottomToolbar/>
      </Toolbar>
    </Page>
  )
}

export default OtherOffers