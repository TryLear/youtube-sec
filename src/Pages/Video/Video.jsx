import React from 'react'
import './Video.css'
import PlayVideo from '../../Componets/PlayVideo/PlayVideo'
import Recommed from '../../Componets/Recommeded/Recommed'
import { useParams } from 'react-router-dom'

function Video() {
  const {videoId,categoryId}=useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommed categoryId={categoryId}/>
      
    </div>
  )
}

export default Video