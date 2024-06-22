import React from 'react'
import Container from '../_components/Container'
import { RecomendationUI } from '../_components/RecomendationsSearch'

export interface RecomendationUI2 {
  id: number
  recomenda: string
}

const page = () => {
  const recom: RecomendationUI2[] = [{ id: 1, recomenda: 'tus ojos hacen que las estrellas parezcan que no brillan' }, { id: 1, recomenda: 'tus ojos hacen que las estrellas parezcan que no brillan' }, { id: 1, recomenda: 'tus ojos hacen que las estrellas parezcan que no brillan' }]
  return (
    <Container>
      <h1 className='tracking-tighter text-sky-600 font-bold text-[17px]'>Has click a cualquiera de las cartas</h1>
      <div></div>
    </Container>
  )
}

export default page