import React from 'react'

const RecomendationsSearch = () => {
  const recomendations = [{id:"eqweqwe", rec:"weqwe"}, {id:"acassdf", rec:"weqwe"}, {id:"asacc", rec:"weqwe"},{id:"wweqwe", rec:"weqwe"}]
  return (
    <div className='bg-white rounded-sm border-t-2 text-black text-[15px] tracking-tighter'>
      {
        recomendations.map((rec) => (
          <p className='px-2' key={rec.id}>{rec.rec}</p>
        ))
      }
    </div>
  )
}

export default RecomendationsSearch