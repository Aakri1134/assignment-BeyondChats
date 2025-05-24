import { useGlobalContext } from "../../context/GlobalContext"
import { BsMoonStarsFill } from "react-icons/bs"
import { SlOptions } from "react-icons/sl"
import { TbLayoutSidebarFilled } from "react-icons/tb"
import { IoMdArrowRoundBack } from "react-icons/io"

const Header = ({ className }) => {
  const { chatData, sidebarVisible, toggleSidebar, setChatID } =
    useGlobalContext()
  return (
    <div
      className={` w-full h-14 shadow-md flex flex-row items-center justify-between px-4 ${className}`}
    >
      <div className=" flex flex-row gap-3">
        <button
          className=" flex md:hidden h-8 w-8  justify-center items-center"
          onClick={() => {
            setChatID(null)
          }}
        >
          <IoMdArrowRoundBack />
        </button>

        <h1 className=" font-bold text-2xl">{chatData.name}</h1>
      </div>
      <div className=" flex flex-row gap-3">
        <button className="  flex justify-center items-center bg-backgroundSecondary w-10 h-10 rounded-md text-button font-extrabold hover:shadow-md hover:border-button hover:border-2 hover:-translate-y-1 duration-100">
          <SlOptions />
        </button>
        <button className="  flex justify-center items-center bg-backgroundSecondary w-10 h-10 rounded-md text-button font-extrabold hover:shadow-md hover:border-button hover:border-2 hover:-translate-y-1 duration-100">
          <BsMoonStarsFill />
        </button>
        {!sidebarVisible ? (
          <button
            className="  flex justify-center items-center bg-backgroundSecondary w-10 h-10 rounded-md text-button font-extrabold hover:shadow-md hover:border-button hover:border-2 hover:-translate-y-1 duration-100"
            onClick={toggleSidebar}
          >
            <TbLayoutSidebarFilled className=" scale-150" />
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Header
