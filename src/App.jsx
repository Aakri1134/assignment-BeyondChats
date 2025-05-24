import Inbox from "./sections/Inbox"
import ChatScreen from "./sections/ChatScreen"
import { useGlobalContext } from "./context/GlobalContext"

export default function App() {

  const {chatID} = useGlobalContext()
  
  return (

    <div className=" theme bg-primary w-screen h-screen flex justify-center items-center">
    <div className=" flex flex-row justify-between h-screen w-full max-w-[1450px] bg-background rounded-xl shadow-2xl">
      <Inbox className={`w-full md:w-[15%] md:min-w-80 ${chatID ? `hidden` : `block`} md:block`}/>
      <ChatScreen/>      
    </div>
    </div>
  )
}
