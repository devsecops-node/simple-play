"use client"
import React from 'react'

interface RecomendationUI {
  id: string
  rec: string
}

const RecomendationsSearch = ({ retrieveData }: { retrieveData: (data: RecomendationUI) => void }) => {

  const recomendations = [{ id: "correct", rec: "Camila Jhosely " }, { id: "acassdf", rec: "weqwe" }, { id: "asacc", rec: "weqwe" }, { id: "wweqwe", rec: "weqwe" }]

  const sendData = (data: RecomendationUI) => {
    retrieveData(data)
  }

  return (
    <div className='transition-all absolute bottom-0 duration-150 bg-white rounded-sm border-t-2 text-black text-[15px] tracking-tighter'>
      {
        recomendations.map((rec) => (
          <p onClick={() => sendData(rec)} className='px-3 py-[2px]' key={rec.id}>{rec.rec}</p>
        ))
      }
    </div>
  )
}

export default RecomendationsSearch