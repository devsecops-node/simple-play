"use client"
import React, { useState } from 'react'
import RecomendationsSearch from './RecomendationsSearch'

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
        <label htmlFor="name" >Try full name</label>
        <input
          type="text"
          onKeyUp={() => setStatusSearch(true)}
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="write your name ..." id="name" />
      </section>
      {statusSearch ? (<RecomendationsSearch retrieveData={retrieveData} />) : <></>}
    </form>
  )
}

export default FormsName