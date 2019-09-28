import React, { useContext, useState } from 'react'
import { editOrder } from '../data/Actions'
import { Block, Page, Navbar, List, ListItem, Toolbar, Fab, Icon, Badge} from 'framework7-react'
import BottomToolbar from './BottomToolbar'
import ReLogin from './ReLogin'
import { StoreContext } from '../data/Store';


const OrderDetails = props => {
  const { state, user, dispatch } = useContext(StoreContext)
  const order = state.orders.find(order => order.id === props.id)
  const [error, setError] = useState('')
  const netPrice = order.total + order.fixedFees + order.deliveryFees - (order.specialDiscount + order.customerDiscount)

  const handleEdit = () => {
    if (state.basket.length > 0) {
      setError('your basket must be empty')
      return
    }
    editOrder(order).then(() => {
      dispatch({type: 'LOAD_BASKET', order})
      props.f7router.navigate('/basket/')
    })
  }


  if (!user) return <ReLogin callingPage="order"/>
  return(
    <Page>
      <Navbar title={state.labels.orderDetails} backLink="Back" />
      <Block>
        <List>
          {order.basket && order.basket.map(pack => {
            const packInfo = state.packs.find(rec => rec.id === pack.id)
            const productInfo = state.products.find(rec => rec.id === packInfo.productId)
            return (
              <ListItem 
                key={pack.id} 
                title={productInfo.name} 
                footer={packInfo.name}
                after={(pack.price * pack.quantity / 1000).toFixed(3)}
              >
                {pack.quantity > 1 ? <Badge slot="title" color="red">{pack.quantity}</Badge> : null}
              </ListItem>
            )}
          )}
          <ListItem title={state.labels.total} after={(order.total / 1000).toFixed(3)} />
          <ListItem title={state.labels.feesTitle} className="red" after={(order.fixedFees / 1000).toFixed(3)} />
          {order.deliveryFees > 0 ? <ListItem title={state.labels.deliveryFees} className="red" after={(order.deliveryFees / 1000).toFixed(3)} /> : null}
          {order.specialDiscount + order.customerDiscount > 0 ? <ListItem title={state.labels.discount} className="discount" after={((order.specialDiscount + order.customerDiscount) / 1000).toFixed(3)} /> : null}
          <ListItem title={state.labels.net} className="blue" after={(netPrice / 1000).toFixed(3)} />
        </List>
      </Block>
      { order.status === 'n' ? 
        <Fab position="left-bottom" slot="fixed" color="red" onClick={() => handleEdit()}>
          <Icon ios="f7:edit" aurora="f7:edit" md="material:edit"></Icon>
        </Fab>
        : ''
      }
      <Toolbar bottom>
        <BottomToolbar/>
      </Toolbar>
    </Page>
  )
}
export default OrderDetails
