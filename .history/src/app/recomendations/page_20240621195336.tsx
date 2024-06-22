"use client"
import React from 'react'
import Container from '../_components/Container'
import Card from '../_components/Card'
import styles from "../_styles/cards.module.css"
import { useState, useRef } from 'react'

export interface RecomendationUI2 {
  id: number
  recomenda: string
}

const page = () => {
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(0)
  const recom: RecomendationUI2[] = [
    { id: 1, recomenda: 'Cuando sonries, el mundo entero se detiene, es tan triste que no lo veas' },
    { id: 2, recomenda: 'Si me preguntas que si te ves bien, diria que no hay nada que cambiaria, eres increible, tal como eres' },
    { id: 3, recomenda: 'Ya deja de preocuparte, recuerda que' }]

  const rightMove = () => {
    console.log(count)
    if (count < 0) {
      setCount(count + 1)
    }
    setCount(count + 1)
  }

  const leftMove = () => {
    console.log(count)
    if (count < 0) {
      setCount(count - 1)
    }
  }
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.cards}>
          {recom.map((dat) => (
            <Card key={dat.id} recomenda={dat} />
          ))}
        </div>

      </div>
      <p className={`self-center z-10 transition-all duration-150 tracking-tighter ${(count % 3 === 0 && count > 0) ? 'block' : 'hidden'}`}>No se puede cargar mas si no haces click</p>
      <button
        onMouseEnter={() => rightMove()}
        onTouchStart={() => rightMove()}
        className={`px-1 py-1 bg-sky-700 rounded-sm ${styles.animation_button}  ${(count % 3 === 0) ? styles.midle : (count % 2 === 0) ? styles.start : styles.final}`}
      >
        Cargar mas
      </button>
    </Container>
  )
}

export default page