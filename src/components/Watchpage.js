import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useSearchParams } from "react-router-dom";
import {closeMenu} from "../utils/appSlice"
import LiveChat from "./LiveChat";

const Watchpage= ()=>{
    const [searchParams]=useSearchParams()
    console.log(searchParams.get("v"))

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    return(
        <div className="px-5 flex w-full">
        <div>
           <iframe width="1000" 
           height="500" 
           src={"https://www.youtube.com/embed/" + searchParams.get("v")}
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen></iframe>
           </div>
           <div className="w-full">
            <LiveChat/>
           </div>

        </div>
        
    )
}

export default Watchpage
