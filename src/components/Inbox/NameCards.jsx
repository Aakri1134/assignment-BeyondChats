import { useEffect } from "react"
import { FaStar } from "react-icons/fa6";

const NameCards = ({ obj }) => {
  const {
    name,
    recent,
    company = "",
    lastUpdate = "now",
    unread = false,
    id,
    starred
  } = obj
  useEffect(() => {
    console.log(obj)
    console.log(unread)
  }, [])

  return (
    <div className="flex flex-row px-3 gap-3 h-16 items-center rounded-lg hover:bg-slate-800/20 border-b-2">
      <div className="bg-slate-500 rounded-[50%] w-8 h-7" />
      <div className="w-full">
        <h2 className={`text-base flex flex-row gap-1 items-center ${unread? ` font-bold` : ` font-normal`}`}>
          {name}
          <span className="text-slate-500 font-extrabold">.</span>
          {company}
          {starred?<FaStar className=" text-yellow-500 mb-1"/>:null}
        </h2>
        <div className="flex flex-row w-full justify-between items-center">
          <p
            className={`text-sm ${
              unread ? "text-slate-800 font-medium" : "text-slate-500 font-normal"
            }`}
          >
            {recent.length > 21 ? `${recent.substring(0, 21)}...` : recent}
          </p>
          <p
            className={`text-sm font-semibold ${
              unread ? "text-slate-900" : "text-slate-500"
            }`}
          >
            {lastUpdate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NameCards
