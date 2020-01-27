import React, { useContext, useState, useEffect } from 'react'
import { Block, Page, Navbar, List, ListItem, Toolbar } from 'framework7-react'
import { StoreContext } from '../data/store'
import { quantityDetails } from '../data/actions'
import labels from '../data/labels'
import { orderPackStatus } from '../data/config'
import BottomToolbar from './bottom-toolbar'

const ReturnOrder = props => {
  const { state } = useContext(StoreContext)
  const [orderBasket, setOrderBasket] = useState([])
  useEffect(() => {
    setOrderBasket(() => {
      const order = state.orders.find(o => o.id === props.id)
      let basket = order.basket
      basket = basket.map(p => {
        const changePriceNote = p.actual && p.actual !== p.price ? `${labels.orderPrice}: ${(p.price / 1000).toFixed(3)}, ${labels.currentPrice}: ${(p.actual / 1000).toFixed(3)}` : ''
        const statusNote = `${orderPackStatus.find(s => s.id === p.status).name} ${p.overPriced ? labels.overPricedNote : ''}`
        return {
          ...p,
          changePriceNote,
          statusNote
        }
      })
      return basket
    })
  }, [state.orders, props.id])
  return(
    <Page>
      <Navbar title={labels.returnOrder} backLink={labels.back} />
      <Block>
        <List mediaList>
          {orderBasket.map(p => 
            <ListItem 
              link={`/return-order-pack/${props.id}/pack/${p.packId}`}
              key={p.packId} 
              title={p.productName}
              subtitle={p.packName}
              text={quantityDetails(p)}
              footer={`${labels.status}: ${p.statusNote}`}
              after={(p.gross / 1000).toFixed(3)}
            >
              {p.changePriceNote ? <div className="list-subtext1">{p.changePriceNote}</div> : ''}
            </ListItem>
          )}
        </List>
      </Block>
      <Toolbar bottom>
        <BottomToolbar/>
      </Toolbar>
    </Page>
  )
}
export default ReturnOrder
