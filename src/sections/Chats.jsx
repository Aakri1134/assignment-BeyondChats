import ChatSection from "../components/Chat/ChatSection"
import ChatTextBubble from "../components/Chat/ChatTextBuddle"
import Header from "../components/Chat/Header"
import { useGlobalContext } from "../context/GlobalContext"

const Chats = ({ className }) => {
  const { chatID, chatData } = useGlobalContext()
  
  return (
    <>
      {chatID && !chatData.err ? (
        <div className={` w-full relative ${className}`}>
          <Header />
          <div className=" h-[calc(100vh-3.5rem)] ">
          <ChatSection/>
          <ChatTextBubble className=" absolute bottom-6"/>
          </div>
        </div>
      ) : (
        <div className={` w-full flex justify-center items-center ${className}`}>
          <h1>Chat Now!!</h1>
        </div>
      )}
    </>
  )
}

export default Chats
