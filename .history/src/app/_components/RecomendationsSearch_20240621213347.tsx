"use client"
import React from 'react'

import { useRouter } from 'next/navigation'
export interface RecomendationUI {
  id: string
  rec: string
}

const RecomendationsSearch = ({ retrieveData }: { retrieveData: (data: RecomendationUI) => void }) => {
  const router = useRouter()

  const recomendations = [{ id: "correct", rec: "Camila Jhosely " }, { id: "acassdf", rec: "weqwe" }, { id: "asacc", rec: "weqwe" }, { id: "wweqwe", rec: "weqwe" }]

  const sendData = (data: RecomendationUI) => {
    retrieveData(data)
  }
  const activateSomething = () => {
    router.push('/recomendations')
  }
  return (
    <div className='transition-all flex flex-col duration-150 bg-white rounded-sm border-t-2 text-black text-[15px] tracking-tighter'>
      <p className='px-2 py-2'>Ya se que eres tu <span className='font-bold text-red-500'>Camila</span>, dale next</p>
      <button
        type='button'
        className='self-center text-center transition-all duration-150 animate-bounce bg-blue-600 px-2 py-1 rounded-md text-white hover:animate-none'
        onClick={() => router.push('/recomendations')}
      >next
      </button>
    </div>
  )
}

export default RecomendationsSearch