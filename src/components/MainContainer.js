import React from "react";
import ButoonList from "./ButoonList";
import VideoContainer from "./VideoContainer";

const MainContainer= ()=>{
    return(
        <div className="col-span-11">
            
            <ButoonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer