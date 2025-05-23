import { useEffect, useState } from "react"
import NameCards from "../components/NameCards"
import { SlArrowDown } from "react-icons/sl"
import FilterDropdown from "../components/FilterDropdown"
import chatData from "../dummy data/chatData"

const Inbox = ({ className }) => {
  const [typeFilter, setTypeFilter] = useState("all")
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [data, setData] = useState(chatData)
  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(0)
    if (typeFilter === "all") {
      data.map((obj) => {
        setNum((x) => x + 1)
      })
    } else {
      data.map((obj) => {
        if(obj.type === typeFilter) setNum((x) => x + 1)
      })
    }
  }, [data, typeFilter])

  return (
    <div className={` border-r-2 ${className}`}>
      <div className="h-14 border-b-2 flex items-center pl-6 shadow-md">
        <h1 className=" text-2xl font-sans font-bold text-button">
          Your Inbox
        </h1>
      </div>
      <div className=" h-10 grid grid-cols-2 items-center justify-center px-3">
        <div className=" relative">
          <button
            className=" flex flex-row items-center font-bold text-md gap-2 w-28 justify-center"
            onClick={() => {
              setShowFilterDropdown((x) => !x)
            }}
          >
            {num} {typeFilter[0].toUpperCase() + typeFilter.substring(1)}{" "}
            <SlArrowDown className={`${showFilterDropdown? `rotate-180`: `rotate-0` } duration-200`}/>
          </button>
          {showFilterDropdown ? (
            <FilterDropdown
              className=" absolute top-8"
              setTypeFilter={setTypeFilter}
              setShowFilterDropdown={setShowFilterDropdown}
            />
          ) : null}
        </div>
        <h1> Sort</h1>
      </div>
      <div className=" flex flex-col gap-1 px-1 ">
        {typeFilter === "all"
          ? data.map((obj) => {
              return <NameCards key={obj.id} obj={obj} />
            })
          : typeFilter === "starred" ? 
            data.filter((obj) => {
              return obj.starred
            }).map(obj => {
              return <NameCards key={obj.id} obj={obj} />
            })
          :
           data
              .filter((obj) => {
                return obj.type === typeFilter
              })
              .map((obj) => {
                return <NameCards key={obj.id} obj={obj} />
              })}
      </div>
    </div>
  )
}

export default Inbox
