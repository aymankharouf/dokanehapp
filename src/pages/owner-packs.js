import React, { useContext, useMemo } from 'react'
import { Block, Page, Navbar, List, ListItem, Toolbar, Searchbar, NavRight, Link, Badge } from 'framework7-react'
import BottomToolbar from './bottom-toolbar'
import { StoreContext } from '../data/store'
import moment from 'moment'
import 'moment/locale/ar'
import PackImage from './pack-image'
import labels from '../data/labels'

const OwnerPacks = props => {
  const { state } = useContext(StoreContext)
  let ownerPacks = useMemo(() => {
    let ownerPacks = state.storePacks.filter(p => p.storeId === props.id)
    return ownerPacks.sort((p1, p2) => p1.price - p2.price)
  }, [state.storePacks, props.id])
  const store = useMemo(() => state.stores.find(s => s.id === props.id)
  , [state.stores, props.id])
  return(
    <Page>
      <Navbar title={`${store.name}`} backLink={labels.back}>
        <NavRight>
          <Link searchbarEnable=".searchbar" iconMaterial="search"></Link>
        </NavRight>
        <Searchbar
          className="searchbar"
          searchContainer=".search-list"
          searchIn=".item-title, .item-subtitle"
          clearButton
          expandable
          placeholder={labels.search}
        ></Searchbar>
      </Navbar>
      <Block>
        <List className="searchbar-not-found">
          <ListItem title={labels.noData} />
        </List>
        <List mediaList className="search-list searchbar-found">
          {ownerPacks.length === 0 ? 
            <ListItem title={labels.noData} /> 
          : ownerPacks.map(p => {
              const packInfo = state.packs.find(pa => pa.id === p.packId)
              const productInfo = state.products.find(pr => pr.id === packInfo.productId)
              return (
                <ListItem
                  link={`/pack/${p.id}`}
                  title={productInfo.name}
                  subtitle={packInfo.name}
                  test={moment(p.time.toDate()).fromNow()}
                  after={(p.price / 1000).toFixed(3)}
                  key={p.id}
                >
                  <PackImage slot="media" pack={packInfo} type="list" />
                  {productInfo.isNew ? <Badge slot="title" color='red'>{labels.new}</Badge> : ''}
                  {packInfo.isOffer ? <Badge slot="title" color='green'>{labels.offer}</Badge> : ''}
                  <Badge slot="footer" color='green'> {labels.myPrice} {(p.price / 1000).toFixed(3)} </Badge>
                </ListItem>
              )
            })
          }
        </List>
      </Block>

      <Toolbar bottom>
        <BottomToolbar/>
      </Toolbar>
    </Page>
  )
}

export default OwnerPacks