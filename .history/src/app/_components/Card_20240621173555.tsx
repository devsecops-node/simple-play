import React from 'react'
import styles from "../_styles/cards.module.css"

// h-[120px] w-[200px] cursor-pointer p-4 rounded-md bg-white shadow-md text-black transition-all duration-150 hover:scale-105
const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}></h2>
    </div>
  )
}

export default Card