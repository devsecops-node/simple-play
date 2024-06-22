import React from 'react'

const RecomendationsSearch = () => {
  const recomendations = [{id:"eqweqwe", rec:"weqwe"}, {id:"acassdf", rec:"weqwe"}, {id:"asacc", rec:"weqwe"},{id:"wweqwe", rec:"weqwe"}]
  return (
    <div className='bg-white rounded-sm border-t-2'>
      {
        recomendations.map((rec) => (
          <p key={rec.id}>{rec.rec}</p>
        ))
      }
    </div>
  )
}

export default RecomendationsSearch