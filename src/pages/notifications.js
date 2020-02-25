import React, { useContext, useState, useEffect } from 'react'
import { Block, Page, Navbar, List, ListItem, Toolbar } from 'framework7-react'
import BottomToolbar from './bottom-toolbar'
import { StoreContext } from '../data/store'
import labels from '../data/labels'
import moment from 'moment'
import 'moment/locale/ar'
import { readNotification, getMessage, showError } from '../data/actions'


const Notifications = props => {
  const { state } = useContext(StoreContext)
  const [error, setError] = useState('')
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    setNotifications(() => [...state.userInfo.notifications].sort((n1, n2) => n2.time.seconds - n1.time.seconds))
  }, [state.userInfo])
  useEffect(() => {
    if (error) {
      showError(error)
      setError('')
    }
  }, [error])
  const handleOpen = notificationId => {
    try{
      readNotification(state.userInfo, notificationId)
      props.f7router.navigate(`/notification-details/${notificationId}`)
    } catch(err) {
      setError(getMessage(props, err))
    }
  }
  return (
    <Page>
      <Navbar title={labels.notifications} backLink={labels.back} />
      <Block>
        <List mediaList>
          {notifications.length === 0 ? 
            <ListItem title={labels.noData} />
          : notifications.map(n =>
              <ListItem
                link="#"
                title={n.title}
                subtitle={n.status === 'n' ? labels.notRead : labels.read}
                footer={moment(n.time.toDate()).fromNow()}
                key={n.id}
                onClick={() => handleOpen(n.id)}
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

export default Notifications
