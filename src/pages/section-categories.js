import React, { useContext, useMemo } from 'react'
import { Button, Block, Page, Navbar, Toolbar } from 'framework7-react'
import { StoreContext } from '../data/store'
import BottomToolbar from './bottom-toolbar'
import labels from '../data/labels'
import { randomColors } from '../data/config'

const SectionCategories = props => {
  const { state } = useContext(StoreContext)
  const section = useMemo(() => state.sections.find(s => s.id === props.id)
  , [state.sections, props.id])
  const categories = useMemo(() => state.categories.filter(c => c.sectionId === props.id)
  , [state.categories, props.id])
  let i = 0
  return(
    <Page>
      <Navbar title={section.name} backLink={labels.back} />
      <Block>
        {categories.map(c => {
          return (
            <Button large fill className="sections" color={randomColors[i++ % 10].name} href={`/category/${c.id}`} key={c.id}>
              <span className="button-label">{c.name}</span>
            </Button>
          )
        })}
      </Block>
      <Toolbar bottom>
        <BottomToolbar isHome="1"/>
      </Toolbar>
    </Page>
  )
}


export default SectionCategories