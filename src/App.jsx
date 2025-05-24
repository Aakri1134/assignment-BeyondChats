import { useEffect, useState } from "react"
import Chats from "./sections/Chats"
import Inbox from "./sections/Inbox"
import Sidebar from "./sections/Sidebar"
import { useGlobalContext } from "./context/GlobalContext"
import ChatScreen from "./sections/ChatScreen"

export default function App() {

  return (
    <div className=" theme bg-primary w-screen h-screen flex justify-center items-center">
    <div className=" flex flex-row justify-between h-screen w-full max-w-[1450px] bg-background rounded-xl shadow-2xl">
      <Inbox className={`w-full md:w-[15%] md:min-w-80`}/>
      <ChatScreen/>      
    </div>
    </div>
  )
}
