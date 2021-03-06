import { useContext, useState, useEffect } from 'react'
import { Block, Page, Navbar, List, ListItem, Badge, Toolbar } from 'framework7-react'
import Footer from './footer'
import { StoreContext } from '../data/store'
import moment from 'moment'
import 'moment/locale/ar'
import labels from '../data/labels'
import { storeSummary, setup } from '../data/config'
import { productOfText } from '../data/actions'
import { PackPrice } from '../data/interfaces'

interface Props {
  type: string
}
const StorePacks = (props: Props) => {
  const { state } = useContext(StoreContext)
  const [storePacks, setStorePacks] = useState<PackPrice[]>([])
  useEffect(() => {
    setStorePacks(() => {
      const storePacks = state.packPrices.filter(p => p.storeId === state.customerInfo?.storeId)
      const extendedStorePacks = storePacks.map(p => {
        let packInfo = state.packs.find(pa => pa.id === p.packId)!
        const trademarkInfo = state.trademarks.find(t => t.id === packInfo?.trademarkId)
        const countryInfo = state.countries.find(c => c.id === packInfo?.countryId)
        packInfo = {
          ...packInfo,
          trademarkName: setup.locale === 'en' ? trademarkInfo?.ename : trademarkInfo?.name,
          countryName: setup.locale === 'en' ? countryInfo?.ename : countryInfo?.name
        }
        return {
          ...p,
          packInfo
        }
      })
      return extendedStorePacks.filter(p => (props.type === 'a')
                            || (props.type === 'o' && p.price > (p.packInfo?.price ?? 0)) 
                            || (props.type === 'n' && p.price === (p.packInfo?.price ?? 0) && p.storeId !== p.packInfo?.minStoreId)
                            || (props.type === 'l' && p.price === (p.packInfo?.price ?? 0) && p.storeId === p.packInfo?.minStoreId))
    })
  }, [state.packPrices, state.packs, state.customerInfo, state.trademarks, state.countries, props.type])
  let i = 0
  return(
    <Page>
      <Navbar title={storeSummary.find(s => s.id === props.type)?.name} backLink={labels.back} />
      <Block>
        <List mediaList>
          {storePacks.length === 0 ? 
            <ListItem title={labels.noData} /> 
          : storePacks.map(p => 
              <ListItem
                link={`/pack-details/${p.packId}/type/o`}
                title={p.packInfo?.productName}
                subtitle={p.packInfo?.productEname}
                text={p.packInfo?.productDescription}
                footer={moment(p.time).fromNow()}
                after={((p.packInfo?.price ?? 0) / 100).toFixed(2)}
                key={i++}
              >
                <img src={p.packInfo?.imageUrl} slot="media" className="img-list" alt={labels.noImage} />
                <div className="list-subtext1">{p.packInfo?.name}</div>
                <div className="list-subtext2">{productOfText(p.packInfo?.trademarkName, p.packInfo?.countryName)}</div>
                {p.price > (p.packInfo?.price ?? 0) && <div className="list-subtext3">{`${labels.myPrice}: ${(p.price / 100).toFixed(2)}`}</div>}
                {p.packInfo?.isOffer && <Badge slot="title" color='green'>{labels.offer}</Badge>}
              </ListItem>
            )
          }
        </List>
      </Block>
      <Toolbar bottom>
        <Footer/>
      </Toolbar>
    </Page>
  )
}

export default StorePacks
