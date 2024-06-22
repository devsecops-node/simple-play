"use client"
import React, { useState } from 'react'
import styles from "../_styles/cards.module.css"
import { RecomendationUI2 } from '../recomendations/page'

// h-[120px] w-[200px] cursor-pointer p-4 rounded-md bg-white shadow-md text-black transition-all duration-150 hover:scale-105
const Card = ({ recomenda }: { recomenda: RecomendationUI2 }) => {
  const [status, setStatus] = useState(false)
  return (
    <div className={styles.card} onMouseEnter={() => setStatus(true)} onMouseLeave={() => setStatus(false)}>
      <h2 className={styles.card_title}>#{recomenda.id} 🎊</h2>
    </div>
  )
}

export default Card