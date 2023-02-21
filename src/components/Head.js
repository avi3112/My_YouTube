import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head= ()=>{
    const dispatch= useDispatch()


    const toggleMEnuHandler= ()=>{
        dispatch(toggleMenu())
    }



    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg"  >

        <div className="flex col-span-1">
            <img 
            onClick={()=> toggleMEnuHandler()}

            className= "h-12 cursor-pointer" alt="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybXLqszDXnATTCrlrZtAXEV6sF8kF4YKy0Q&usqp=CAU"/>
            <a href="/">
            <img className= "h-14 mx-2" alt="youtube logo" src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Youtube-Logo-Font-3.jpg?fit=900%2C550&ssl=1"/>
            </a>
        </div>

        <div className="col-span-10 px-10">
            <input className= "w-1/2 border border-gray-400 p-2 rounded-l-full"type="text"/>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔎</button>
        </div>

        <div>
            <img className= "h-8" alt= "user" src= "https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
            
        </div>

        </div>
    )
}

export default Head