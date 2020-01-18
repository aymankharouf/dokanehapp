import React, { useContext, useMemo } from 'react'
import { Block, Page, Navbar, List, ListItem, Toolbar } from 'framework7-react'
import BottomToolbar from './bottom-toolbar'
import moment from 'moment'
import 'moment/locale/ar'
import { StoreContext } from '../data/store'
import labels from '../data/labels'
import { orderStatus, orderPositions } from '../data/config'

const FollowupOrdersList = props => {
  const { state } = useContext(StoreContext)

  const orders = useMemo(() => {
    if (state.positionOrders) {
      const orders = state.positionOrders.map(o => {
        const customerInfo = state.customers.find(c => c.id === o.userId)
        const orderStatusInfo = orderStatus.find(s => s.id === o.status)
        return {
          ...o,
          customerInfo,
          orderStatusInfo
        }
      })
      return orders.sort((o1, o2) => o2.time.seconds - o1.time.seconds)
    } else {
      return []
    }
  }, [state.positionOrders, state.customers])

  return(
    <Page>
      <Navbar title={`${labels.followupOrders} ${orderPositions.find(p => p.id === props.id).name}`} backLink={labels.back} />
      <Block>
        <List mediaList>
          {orders.length === 0 ? 
            <ListItem title={labels.noData} /> 
          : orders.map(o => 
              <ListItem
                link={`/order-details/${o.id}/type/f`}
                title={o.customerInfo.fullName}
                subtitle={`${labels.status}: ${o.orderStatusInfo.name}`}
                text={o.lastUpdate ? moment(o.lastUpdate.toDate()).fromNow() : ''}
                footer={o.withDelivery ? labels.withDeliveryNote : ''}
                after={(o.total / 1000).toFixed(3)}
                key={o.id}
              />
            )
          }
        </List>
      </Block>
      <Toolbar bottom>
        <BottomToolbar/>
      </Toolbar>
    </Page>
  )
}

export default FollowupOrdersList
