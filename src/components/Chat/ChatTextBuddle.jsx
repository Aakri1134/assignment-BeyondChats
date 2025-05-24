import { useState } from "react"
import { BsChatLeftTextFill } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaBolt } from "react-icons/fa6"
import { MdBookmarks } from "react-icons/md"
import { MdEmojiEmotions } from "react-icons/md"
import ModeDropdown from "./ModeDropdown"

const ChatTextBubble = ({ className }) => {
  const [mode, setMode] = useState("chat")
  const [showModeDropdown, setShowModeDropdown] = useState(false)
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    setInput("")
  }

  return (
    <div
      className={` w-full flex justify-center h-[18%] min-h-40 ${className}`}
    >
      <div
        className={`flex flex-col w-[90%] shadow-[0_0_10px_rgba(0,0,0,0.15)] ${mode === 'chat'? `bg-background`: `bg-notes`} rounded-2xl px-3 py-3`}
      >
        <div className=" w-full">
          <button
            className=" flex flex-row gap-1 items-center hover:shadow-lg p-1 h-8 w-20"
            onClick={() => {
              setShowModeDropdown((x) => !x)
            }}
          >
            <BsChatLeftTextFill />{" "}
            <span className=" text-sm font-bold first-letter:capitalize">
              {mode}
            </span>{" "}
            <RiArrowDropDownLine
              className={`scale-150 duration-200 ${
                showModeDropdown ? `rotate-180` : ``
              }`}
            />
          </button>
          {showModeDropdown ? (
            <ModeDropdown
              className=" w-28"
              setMode={setMode}
              setShowModeDropdown={setShowModeDropdown}
            />
          ) : null}
        </div>
        {mode === "chat" ? (
          <>
            <textarea
              placeholder="Enter Text"
              className="focus:outline-none h-full pl-2 resize-none bg-background"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit()
                }
              }}
            />
            <div className=" w-full flex h-8 flex-row justify-between">
              <div className=" flex flex-row gap-2">
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center border-r border-button">
                  <FaBolt />
                </button>
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center">
                  <MdBookmarks />
                </button>
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center">
                  <MdEmojiEmotions />
                </button>
              </div>
              <div className=" flex flex-row items-center justify-center border border-transparent hover:border-gray-200 rounded-md duration-200 hover:-translate-y-1">
                <button
                  className=" border-r-2 px-2 py-1 font-semibold text-slate-500 hover:text-button hover:scale-105"
                  onClick={handleSubmit}
                >
                  Send
                </button>
                <button className=" px-1 hover:scale-150 duration-200 hover:text-button">
                  <RiArrowDropDownLine className=" text-slate-500" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <textarea
              placeholder="Enter Text"
              className="focus:outline-none h-full pl-2 resize-none bg-notes placeholder:text-black placeholder:font-semibold"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit()
                }
              }}
            />
            <div className=" w-full flex h-8 flex-row justify-between">
              <div className=" flex flex-row gap-2">
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center border-r border-button">
                  <FaBolt />
                </button>
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center">
                  <MdBookmarks />
                </button>
                <button className=" px-1 hover:scale-105 hover:-translate-y-1 duration-200 text-button w-8 flex justify-center items-center">
                  <MdEmojiEmotions />
                </button>
              </div>
              <div className=" flex flex-row items-center justify-center border border-transparent  rounded-md duration-200 hover:-translate-y-1">
                <button
                  className=" px-2 py-1 font-semibold text-white bg-button rounded-lg hover:scale-105"
                  onClick={handleSubmit}
                >
                  Add note
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ChatTextBubble
