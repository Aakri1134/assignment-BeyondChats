import { FiSidebar } from "react-icons/fi"
import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

import AIPage from "../components/Sidebar/AIPage"
import Details from "../components/Sidebar/Details"

const Sidebar = ({ className }) => {
  const [activeScreen, setActiveScreen] = useState("ai")
  const { toggleSidebar } = useGlobalContext()
  return (
    <div
      className={`w-[425px] ${className} border-l-2 h-screen bg-secondary relative flex flex-col`}
    >
      <div className="h-14 border-b-2 flex items-center shadow-md flex-row justify-between px-4 bg-background">
        <div className=" flex flex-row gap-2">
          <button
            className={`relative p-2 h-full font-semibold transition-colors duration-300 overflow-hidden ${
              activeScreen === "ai" ? "text-blue-700" : "text-slate-800"
            }`}
            onClick={() => setActiveScreen("ai")}
          >
            AI Copilot
            <div
              className={`absolute bottom-0 h-0.5 bg-blue-700 transition-all duration-300 ease-out ${
                activeScreen === "ai" ? "left-0 right-0" : "left-1/2 right-1/2"
              }`}
            />
          </button>
          <button
            className={`relative p-2 h-full font-semibold transition-colors duration-300 overflow-hidden ${
              activeScreen === "details" ? "text-blue-700" : "text-slate-800"
            }`}
            onClick={() => setActiveScreen("details")}
          >
            Details
            <div
              className={`absolute bottom-0 h-0.5 bg-blue-700 transition-all duration-300 ease-out ${
                activeScreen === "details"
                  ? "left-0 right-0"
                  : "left-1/2 right-1/2"
              }`}
            />
          </button>
        </div>
        <button
          className=" p-2"
          onClick={() => {
            toggleSidebar()
          }}
        >
          <FiSidebar />
        </button>
      </div>
        {activeScreen === "ai" ? <AIPage className={" h-[calc(100dvh-3.5rem)]"}/> : <Details className={" h-[calc(100dvh-3.5rem)]"}/>}
    </div>
  )
}

export default Sidebar
