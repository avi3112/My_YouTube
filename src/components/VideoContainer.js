import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import Videocard from "./Videocard";

const VideoContainer= ()=>{
    const [videos,setVideo] = useState([])

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos= async ()=> {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json= await data.json()
        console.log(json.items)
        setVideo(json.items)
    }

    return(
        <div className="flex flex-wrap">

        {videos.map((video)=> (
            <Link key={video.id} to={"/watch?v="+video.id}><Videocard  info={video} /></Link>
            ))}
        </div>

            
        
    )
}

export default VideoContainer