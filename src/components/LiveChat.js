import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";


const LiveChat = ()=>{

    const dispatch= useDispatch()

    const ChatMessages= useSelector((store)=> store.chat.messsage)
 

    useEffect(()=>{
        const i = setInterval(()=>{
            //API Polling
            console.log("api is polling")
            dispatch(
                addMessage({
                name: "avinabh",
                Message: "this is very first comment from redux",
            })
            )

        },2000)

        return()=> clearInterval(i)
    },[])
    return(
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
            {/* {ChatMessages.map((c,i)=> (<ChatMessage key= {i}name={c.name} messsage={c.messsage}/>))} */}
        </div>
    )

}

export default LiveChat

