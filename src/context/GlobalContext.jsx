import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
} 

export const GlobalContextProvider = ({children}) => {
    const [sidebarVisible, setSidebarVisible] = useState(true)
    const [chatID, setChatID] = useState(-1)

    const toggleSidebar = () => {
        setSidebarVisible(x => !x)
    }

    return(
        <GlobalContext.Provider value={{sidebarVisible, toggleSidebar, chatID, setChatID}}>
            {children}
        </GlobalContext.Provider>
    )
}