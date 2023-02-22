const ChatMessage=({name,messsage})=>{
    return(
        <div className="flex items-center shadow-sm">
        <img className= "h-8" alt= "user" src= "https://cdn-icons-png.flaticon.com/512/149/149071.png"/>

        <span className="font-bold px-2">{name}</span>

        <span>{messsage}</span>
        </div>
    )

}



export default ChatMessage