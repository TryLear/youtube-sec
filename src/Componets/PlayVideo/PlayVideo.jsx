import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
// import video1 from '../../assest/pexels-peter-fowler-6394054 (Original).mp4'
import Like from '../../assest/Z (4).jpg'
import Dislike from '../../assest/5+0xdjbTbfh3cD4PtrZzOvFNlZr1vvp5+e36OrxyAV74B2GASUT6m2YpAAAAAElFTkSuQmCC.png'
import Save from '../../assest/nGLwq8bfz66fryU+SbfeMNr3LO8tyx3CH2ye8ZyctXfDeykVgpj1jCcE0TWLIAiCIAiCWMofBGoqp1DNhwwAAAAASUVORK5CYII=.png'
import Share from '../../assest/w4FYSGGVoJR7XlsZjGNDQf1JTNDC8htOOAVSU2tmossOMDWhMbYstLUgqOdZ9yYWx5bWnDce402vsPwkugyzbKLkWq3zSqNlP4GnY+Pj4+Pj4+Pj4+Pj4+Pj4+Pj49D+Qfk7zxHHqOP4AAAAABJRU5ErkJggg==.png'
import profile_icon from '../../assest/2Q== (4).jpg'
import Dhruv from '../../assest/Z (3).jpg'
import { Api_Key, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function PlayVideo() {
  const {videoId}=useParams()
  const [apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]=useState([]);
  const fetchVideoData=async()=>{
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_Key}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));

  }
  const fetchChannelData=async()=>{
    const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${Api_Key}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    //fetching comment data
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${videoId}&key=${Api_Key}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
  }
  useEffect(()=>{
    fetchVideoData();
  },[videoId])
  useEffect(()=>{
    fetchChannelData()
  },[apiData])
  return (
    <div className='play-video'>
        {/* <video src={video1} autoPlay muted controls></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:'title here'}</h3>
        <div className="video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):'17k'} View & {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
        <span><img src={Like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):123}</span>
        <span><img src={Dislike} alt="" />33</span>
        <span><img src={Save} alt="" />Save</span>
        <span><img src={Share} alt="" />Share</span>
        </div>
        <hr />
       
        <div className="public">
          <img src={channelData?channelData.snippet.thumbnails.default.url:'dhruv Rathe'} alt="" />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:'Dhruv Rathe'}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):'10M'}</span>
          </div>
          <button>Subscribe</button>
        </div>
          <div className="video-desc">
           <p>{apiData?apiData.snippet.description.slice(0,250):'description is here'}</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):234} Comments</h4>
            {commentData.map((item,index)=>{
              return(
                <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day to go</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={Like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={Dislike}alt="" />
                  <span>12</span>
                </div>
  
                </div>
             
             </div>

              )

            })}
          

          </div>
         
          

       
        


    </div>
  )
}

export default PlayVideo