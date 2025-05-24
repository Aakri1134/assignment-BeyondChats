import { useGlobalContext } from "../../context/GlobalContext"

const ChatSection = () => {
  const { chatData } = useGlobalContext()
  return (
    <div className="flex flex-col justify-start items-center w-full gap-2 px-4 py-2">
      {chatData.chats.map((obj, index) => {
        const isSent = obj.type === "sent";
        return (
          <div
            key={index}
            className={`w-full flex ${isSent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-xs sm:max-w-md px-4 py-2 rounded-lg text-sm font-medium
                ${isSent ? "bg-secondary text-black" : "bg-backgroundSecondary text-black"}
                shadow-md
              `}
            >
              {obj.msg}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatSection

