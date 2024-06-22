import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-slate-700 h-screen text-'>
      {children}
    </div>
  )
}

export default Container