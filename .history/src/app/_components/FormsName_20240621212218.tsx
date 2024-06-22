"use client"
import React, { useState } from 'react'
import RecomendationsSearch from './RecomendationsSearch'
import Image from 'next/image'

const FormsName = () => {
  const [name, setName] = useState('')
  const [statusSearch, setStatusSearch] = useState(false)

  const retrieveData = (data: { id: string, rec: string }) => {
    console.log(data)
    setStatusSearch(false)
  }

  return (
    <form action="/" className="">
      <section className="flex flex-col">
        <label htmlFor="name" hidden={statusSearch} >Try full name</label>
        <input
          type="text"
          hidden={statusSearch}
          onClick={() => setStatusSearch(true)}
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="write your name ..." id="name" />
      </section>
      {statusSearch ? (<RecomendationsSearch retrieveData={retrieveData} />) : <></>}
      {statusSearch ? (<div className='flex justify-center items-center'><Image src="/paloma.webp" alt="Cargando" width={100} height={100} /></div>) : <></>}
    </form>
  )
}

export default FormsName