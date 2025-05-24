import { useGlobalContext } from "../context/GlobalContext"
import Chats from "./Chats"
import Sidebar from "./Sidebar"

// Implemented Chatscreen to prevent re-render of Inbox on Sidebar update 

const ChatScreen = () => {
  const {chatID, sidebarVisible, toggleSidebar } = useGlobalContext()

  return (
    <>
      <Chats className={`${chatID? `block` :`hidden`} md:block h-screen flex-1 `} />
      {sidebarVisible ? <Sidebar className=" hidden md:block" /> : null}
    </>
  )
}

export default ChatScreen
