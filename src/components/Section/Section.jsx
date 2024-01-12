import React from 'react'
import { Header } from './Section.styled'

const Section = ({title, children}) => {
  return (
    <section>
          <Header>{title}</Header>
          {children}
    </section>
  )
}

export default Section