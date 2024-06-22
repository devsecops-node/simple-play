"use client"
import React, { useState } from 'react'

const FormsName = () => {
  const [name, setName] = useState('')
  return (
    <form action="/" className="flex flex-col">
      <section className="flex flex-col">
        <label htmlFor="name" >Try full name</label>
        <input type="text" placeholder="write your name ..." id="name" />
      </section>
    </form>
  )
}

export default FormsName