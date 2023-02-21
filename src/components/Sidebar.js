import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar= ()=>{
    const isMenuOpen= useSelector(store=> store.app.isMenuOpen)

    //early return

    if(!isMenuOpen) return null

    return(
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Shorts">Shots</Link></li>
                <li>Video</li>
                <li>Live </li>
                
            </ul>
        <h1 className="font-bold py-5">subscription</h1>
            
            <ul>
                <li>music</li>
                <li>sports</li>
                <li>gaming</li>
                <li>movie </li>
                
            </ul>
        <h1 className="font-bold py-5">watch later</h1>
            <ul>
                <li>music</li>
                <li>sports</li>
                <li>gaming</li>
                <li>movie</li>
                
            </ul>
        </div>
    )
}

export default Sidebar