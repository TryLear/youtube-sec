import React, { useEffect, useState } from 'react'
import './Feed.css'
import {Link} from 'react-router-dom'
import { Api_Key, value_converter } from '../../data'
import moment from 'moment'



function Feed({category}) {
  const [data,setData]=useState([])
  const fetchData = async()=>{
    const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${Api_Key}`
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items));
  }
  useEffect(()=>{
    fetchData();
  },[category])
  console.log(category);
  

  return (
    <div className="feed">
      {data.map((item,index)=>{
         return(
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} View & {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
        
      })}
       
      
    
     
    
  </div>
    
  )
}

export default Feed