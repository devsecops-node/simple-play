"use client"
import React from 'react'
import Container from '../_components/Container'
import Card from '../_components/Card'
import styles from "../_styles/cards.module.css"
import { useRef } from 'react'

export interface RecomendationUI2 {
  id: number
  recomenda: string
}

const page = () => {
  const buttonRef = useRef(null)
  const containerRef = useRef(null)
  const recom: RecomendationUI2[] = [
    { id: 1, recomenda: 'Cuando sonries, el mundo entero se detiene, es tan triste que no lo veas' },
    { id: 2, recomenda: 'Si me preguntas que si te ves bien, diria que no hay nada que cambiaria, eres increible, tal como eres' },
    { id: 3, recomenda: 'Ya deja de preocuparte, recuerda que' }]
  return (
    <Container>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.cards}>
          {recom.map((dat) => (
            <Card key={dat.id} recomenda={dat} />
          ))}
        </div>

      </div>
      <button
        ref={buttonRef}
        onMouseEnter={moving}
        className={`inline-block px-2 py-1 bg-sky-700 rounded-sm ${styles.animation_button}`}
      >
        Cargar mas
      </button>
    </Container>
  )
}

export default page