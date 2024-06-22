import React from 'react'
import styles from "../_styles/cards.module.css"
import { RecomendationUI2 } from '../recomendations/page'

// h-[120px] w-[200px] cursor-pointer p-4 rounded-md bg-white shadow-md text-black transition-all duration-150 hover:scale-105
const Card = ({ recomenda }: { recomenda: RecomendationUI2 }) => {
  return (
    <div className={styles.card} onMouseEnter={()=>console.log('qweew')}>
      <h2 className={styles.card_title}>#{recomenda.id} 🎊</h2>
      {/* <p className={styles.description}>{recomenda.recomenda}</p> */}
    </div>
  )
}

export default Card