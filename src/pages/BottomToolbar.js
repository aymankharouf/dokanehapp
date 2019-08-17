import React, { useContext } from 'react'
import { Icon, Link, Badge} from 'framework7-react'
import { StoreContext } from '../data/Store';

const BottomToolbar = props => {
  const { state } = useContext(StoreContext)
  const searchHome = props.isHome === '1' ? 'search' : 'home'
  return (
    <React.Fragment>
      <Link href={`/${searchHome}/`}>
      <Icon ios={`f7:${searchHome}`} aurora={`f7:${searchHome}`} md={`material:${searchHome}`} />
      </Link>
      <Link href={state.basket.length > 0 ? '/basket/' : ''}>
        <Icon ios="f7:shopping_cart" aurora="f7:shopping_cart" md="material:shopping_cart">
          {state.basket.length > 0 ? <Badge color="red">{state.basket.length}</Badge> : ''}
        </Icon>
      </Link>
    </React.Fragment>
  )
}

export default BottomToolbar
