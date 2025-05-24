import { createContext, useContext, useEffect, useState } from "react";
import { fetchChatUsingID } from "../dummyData/chatData";

const GlobalContext = createContext(null)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
} 

export const GlobalContextProvider = ({children}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const [chatID, setChatID] = useState(null)
    const [chatData, setChatData] = useState(fetchChatUsingID(chatID))
    const [AIInput, setAIInput] = useState()

    useEffect(() => {
        setChatData(fetchChatUsingID(chatID))
        if(chatID) setSidebarVisible(true)
    }, [chatID])

    const toggleSidebar = () => {
        setSidebarVisible(x => !x)
    }

    return(
        <GlobalContext.Provider value={{sidebarVisible, toggleSidebar, chatID, setChatID, chatData, AIInput, setAIInput}}>
            {children}
        </GlobalContext.Provider>
    )
}