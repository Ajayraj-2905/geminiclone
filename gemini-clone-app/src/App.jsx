import React, { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Context } from './context/Context'

const App = () => {
  const { expand, setExpand } = useContext(Context)
  return (
    <div className='flex h-screen'>
      <Sidebar />
      {expand && (
        <div className='bg-black bg-opacity-65 w-full h-full absolute top-0 left-0 md:hidden' onClick={() => setExpand(prev => !prev)} />
      )}
      <Main />
    </div>
  )
}

export default App