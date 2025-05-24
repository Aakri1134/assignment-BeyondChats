import { useEffect, useRef } from "react"

const ModeDropdown = ({ setMode, className, setShowModeDropdown }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowModeDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShowModeDropdown])

  return (
    <div 
      ref={dropdownRef}
      className={`bg-background border border-gray-300 rounded shadow-lg ${className}`}
    >
      <div className="w-28 text-center flex flex-col">
        <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setMode("chat")
            setShowModeDropdown(false)
          }}
        >
          Chat
        </button>
        <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setMode("note")
            setShowModeDropdown(false)
          }}
        >
          Notes
        </button>
      </div>
    </div>
  )
}

export default ModeDropdown