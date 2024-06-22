import React from 'react'

const RecomendationsSearch = () => {
  const recomendations = ["qweqwe", "Qweqwe", "qweqweqwe", "qweqweqwe"]
  return (
    <div className='bg-white rounded-sm border-t-2'>
      {
        recomendations.map((rec) => (
          <p>{rec}</p>
        ))
      }
    </div>
  )
}

export default RecomendationsSearch