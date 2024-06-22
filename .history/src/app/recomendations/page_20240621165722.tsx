import React from 'react'
import Container from '../_components/Container'
import { RecomendationUI } from '../_components/RecomendationsSearch'

const page = () => {
  const recom:RecomendationUI = []
  return (
    <Container>
      <h1 className='tracking-tighter text-sky-600 font-bold text-[15px]'>Has click a cualquiera de las cartas</h1>
      <div></div>
    </Container>
  )
}

export default page