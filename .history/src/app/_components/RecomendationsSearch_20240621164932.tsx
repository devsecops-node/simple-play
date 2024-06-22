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
    <div className='transition-all flex flex-col duration-150 bg-white rounded-sm border-t-2 text-black text-[15px] tracking-tighter'>
      {/* {
    recomendations.map((rec) => (
      <p
        onClick={() => sendData(rec)}
        className='px-3 py-[2px] transition-all duration-150 hover:bg-slate-400 hover:cursor-pointer hover:text-white'
        key={rec.id}>{rec.rec}
      </p>
      ))
    } */}
      <p className='px-2 py-2'>Ya se que eres tu <span className='font-bold text-red-500'>Camila</span>, porque lo hica ti, dale siguiente</p>
      <button className='self-center text-center transition-all duration-150 animate-bounce bg-blue-600 px-2 py-1'>Next</button>
    </div>
  )
}

export default RecomendationsSearch