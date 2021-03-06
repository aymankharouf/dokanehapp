import { useContext, useState } from 'react'
import { Page, Navbar, Card, CardContent, CardFooter, Toolbar } from 'framework7-react'
import { StoreContext } from '../data/store'
import labels from '../data/labels'
import Footer from './footer'

const Advert = () => {
  const { state } = useContext(StoreContext)
  const [advert] = useState(state.adverts[0])
  return (
    <Page>
      <Navbar title={labels.advert} backLink={labels.back} />
      <Card>
        <CardContent>
          <div className="card-title">{advert.title}</div>
          {advert.imageUrl ? <img src={advert.imageUrl} className="img-card" alt={advert.title} /> : ''}
        </CardContent>
        <CardFooter>
          <p>{advert.text}</p>
        </CardFooter>
      </Card>
      <Toolbar bottom>
        <Footer/>
      </Toolbar>
    </Page>
  )
}

export default Advert
