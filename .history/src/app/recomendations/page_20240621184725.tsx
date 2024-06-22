import React from 'react'
import Container from '../_components/Container'
import { RecomendationUI } from '../_components/RecomendationsSearch'
import Card from '../_components/Card'
import styles from "../_styles/cards.module.css"

export interface RecomendationUI2 {
  id: number
  recomenda: string
}

const page = () => {
  const recom: RecomendationUI2[] = [
    { id: 1, recomenda: 'Cuando sonries, el mundo entero se detiene, es tan triste que no lo veas' },
    { id: 2, recomenda: 'Si me preguntas que si te ves bien, diria que no hay nada que cambiaria, eres increible, tal como eres' },
    { id: 3, recomenda: 'Ya deja de preocuparte, recuerda que' }]
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.cards}>
          {recom.map((dat) => (
            <Card key={dat.id} recomenda={dat} />
          ))}
        </div>
        <button className='mt-5 px-2 py-1 bg-sky-700 rounded-sm'>Cargar mas</button>
      </div>
    </Container>
  )
}

export default page