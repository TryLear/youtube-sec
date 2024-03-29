import React, { useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './Home.css'
import Feed from '../../Componets/Feed/Feed'

function Home({sidebar}) {
  const [category,setCategory]=useState(0)
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?'':'large-container'}`}>
      <Feed category={category} />

    </div>
    </>
  )
}

export default Home