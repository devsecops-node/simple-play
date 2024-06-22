import React from 'react'

const RecomendationsSearch = () => {
  const recomendations = [{id:"correct", rec:"Camila Jhosely "}, {id:"acassdf", rec:"weqwe"}, {id:"asacc", rec:"weqwe"},{id:"wweqwe", rec:"weqwe"}]
  return (
    <div className='w-30% bg-white rounded-sm border-t-2 text-black text-[15px] tracking-tighter'>
      {
        recomendations.map((rec) => (
          <p className='px-3 py-[2px]' key={rec.id}>{rec.rec}</p>
        ))
      }
    </div>
  )
}

export default RecomendationsSearch