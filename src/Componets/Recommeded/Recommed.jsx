import React, { useEffect, useState } from 'react'
import './Recommed.css'
import thumbnail1 from '../../assest/Z (5).jpg'
import thumbnail2 from '../../assest/Z (6).jpg'
import thumbnail3 from '../../assest/Z (7).jpg'
import { Api_Key, value_converter } from '../../data'
import { Link } from 'react-router-dom'

function Recommed({categoryId}) {
    const [apiData,setApiData]=useState([])
    const fetchData=async()=>{
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${Api_Key}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='recommend'>
        {apiData.map((item,index)=>{
            return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video">
                <img src={item.snippet.thumbnails.default.url} alt="" />
                <div className="video-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{value_converter(item.statistics.viewCount)} View</p>
                </div>
             </Link>

            )

        })}
       
    </div>
       
    
  )
}

export default Recommed