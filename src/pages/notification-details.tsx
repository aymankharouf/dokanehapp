import { useContext, useEffect, useState } from 'react'
import { f7, Page, Navbar, List, ListInput, Fab, Icon, Toolbar } from 'framework7-react'
import { StoreContext } from '../data/store'
import Footer from './footer'
import labels from '../data/labels'
import { deleteNotification, getMessage, showError, showMessage } from '../data/actions'
import moment from 'moment'
import 'moment/locale/ar'

interface Props {
  id: string
}
const NotificationDetails = (props: Props) => {
  const { state } = useContext(StoreContext)
  const [error, setError] = useState('')
  const [notification] = useState(() => state.userInfo?.notifications?.find(n => n.id === props.id))
  useEffect(() => {
    if (error) {
      showError(error)
      setError('')
    }
  }, [error])
  const handleDelete = () => {
    try{
      if (state.userInfo && notification) {
        deleteNotification(state.userInfo, notification.id)
        showMessage(labels.deleteSuccess)
        f7.views.current.router.back()
      }
    } catch(err) {
      setError(getMessage(f7.views.current.router.currentRoute.path, err))
    }
  }
  return (
    <Page>
      <Navbar title={notification?.title} backLink={labels.back} />
      <List form>
        <ListInput 
          name="message" 
          value={notification?.message}
          type="textarea" 
          readonly
        />
        <ListInput 
          name="time" 
          value={moment(notification?.time).fromNow()}
          type="text" 
          readonly
        />
      </List>
      <Fab position="left-top" slot="fixed" color="red" className="top-fab" onClick={() => handleDelete()}>
        <Icon material="delete"></Icon>
      </Fab>
      <Toolbar bottom>
        <Footer/>
      </Toolbar>
    </Page>
  )
}
export default NotificationDetails
