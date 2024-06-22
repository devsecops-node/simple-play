import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-slate-600'>
      {children}
    </div>
  )
}

export default Container