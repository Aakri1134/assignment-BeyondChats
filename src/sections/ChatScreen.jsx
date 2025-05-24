import { useGlobalContext } from "../context/GlobalContext"
import Chats from "./Chats"
import Sidebar from "./Sidebar"

// Implemented Chatscreen to prevent re-render of Inbox on Sidebar update 

const ChatScreen = () => {
  const { sidebarVisible, toggleSidebar } = useGlobalContext()

  return (
    <>
      <Chats className=" hidden md:block" />
      {sidebarVisible ? <Sidebar className=" hidden md:block" /> : null}
    </>
  )
}

export default ChatScreen
