import React from 'react'
import './Sidebar.css'
import Home from '../assest/PqNOlPpIhEIpFIJBIto38vf03bl+tPewAAAABJRU5ErkJggg==.png'
import game from '../assest/enkFtY2W0674dIBSLyOmKvDLRUg2vXW27xizeG8pFcH8wwlxzzTXXXHPNNZH+D4G0JENW7MtPAAAAAElFTkSuQmCC.png'
import automobile from '../assest/iH3RpakZetNdMAAAAAElFTkSuQmCC.png'
import sports from '../assest/cLfIqayUjmQAAAABJRU5ErkJggg==.png'
import enteretment from '../assest/AFgB0Z0d0pHeAAAAAElFTkSuQmCC.png'
import Tech from '../assest/19B0Sgm6XDgAAAAASUVORK5CYII=.png'
import music from '../assest/2Q== (2).jpg'
import blog from '../assest/47bSSPpl0MHUEfty9Rkreemggp6eGax5a+ZQRJ7YkuV0yGcN2jFI89TD3+jSI6h7tvbQqeOHOCYhOfdJdPETbYRr2mWWN2+O+0yy4KSmhB5WzWWu9T7Z6S3kGj4hObG152eOt+McWUfcZNI9Z7bTUp2s+XbKvP4R9MNGLXQYj+VwAAAABJRU5ErkJggg==.png'
import news from '../assest/cyLnr3vBOJpOG5g26iNsW+8YAOFFsd8NdmOwriUb5TrD8gU5a3o+Sdkb+kqsv8AKzDYnBguLpkAAAAASUVORK5CYII=.png'
import Dhruv from '../assest/Z (3).jpg'
import Beast from '../assest/9k= (1).jpg'
import fukra from '../assest/2Q== (4).jpg'
import Triger from '../assest/2Q== (5).jpg'

function Sidebar({sidebar, category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?'':'small-sidebar'}`}>
      <div className="shortcut-link" >
        <div className={`side-link ${category===0?'active':''}`} onClick={()=>setCategory(0)} >
          <img src={Home} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20?'active':''}`}  onClick={()=>setCategory(20)}>
          <img src={game} alt="" />
          <p>Game</p>
        </div>
        <div className={`side-link ${category===2?'active':''}`}  onClick={()=>setCategory(2)}>
          <img src={automobile} alt="" />
          <p>AutoMobile</p>
        </div>
        <div className={`side-link ${category===17?'active':''}`}  onClick={()=>setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===23?'active':''}`}  onClick={()=>setCategory(23)}>
          <img src={enteretment} alt="" />
          <p>Entertment</p>
        </div>
        <div className={`side-link ${category===28?'active':''}`}  onClick={()=>setCategory(28)}>
          <img src={Tech} alt="" />
          <p>Tech</p>
        </div>
        <div className={`side-link ${category===10?'active':''}`}  onClick={()=>setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category===22?'active':''}`}  onClick={()=>setCategory(22)}>
          <img src={blog} alt="" />
          <p>Blog</p>
        </div>
        <div className={`side-link ${category===25?'active':''}`}  onClick={()=>setCategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribe-list">
        <h3>Subscribed</h3>
        
        <div className="side-link">
          <img src={Dhruv} alt="" />
          <p>Dhruv Rathee</p>
        </div>
        <div className="side-link">
          <img src={Beast} alt="" />
          <p>Mr Beast</p>
        </div>
        <div className="side-link">
          <img src={fukra} alt="" />
          <p>Fukra Insane</p>
        </div>
        <div className="side-link">
          <img src={Triger} alt="" />
          <p>Triger Insane</p>
        </div>
        

      </div>

    </div>
  )
}

export default Sidebar