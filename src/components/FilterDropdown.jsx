import { useEffect, useRef } from "react"

const FilterDropdown = ({ setTypeFilter, className, setShowFilterDropdown }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShowFilterDropdown])

  return (
    <div 
      ref={dropdownRef}
      className={`bg-background border border-gray-300 rounded shadow-lg ${className}`}
    >
      <div className="w-28 text-center flex flex-col">
        <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setTypeFilter("all")
            setShowFilterDropdown(false)
          }}
        >
          All
        </button>
        <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setTypeFilter("open")
            setShowFilterDropdown(false)
          }}
        >
          Open
        </button>
        <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setTypeFilter("closed")
            setShowFilterDropdown(false)
          }}
        >
          Closed
        </button>
                <button 
          className="px-3 py-1 hover:bg-button hover:text-white duration-100"
          onClick={() => {
            setTypeFilter("starred")
            setShowFilterDropdown(false)
          }}
        >
          Starred
        </button>
      </div>
    </div>
  )
}

export default FilterDropdown