import { FaArrowUp } from "react-icons/fa6";
import { useGlobalContext } from "../../context/GlobalContext";

const InputBubble = ({ className }) => {

  const {AIInput, setAIInput} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={` w-full ${className}`}>
      <form onSubmit={handleSubmit} className=" flex flex-row h-12 mx-4 bg-background rounded-xl shadow-md">
        <input 
        className=" text-sm font-semibold w-full px-3 py-2 focus:outline-none  rounded-xl"
        placeholder="Ask a question..." 
        onChange={(e) => {setAIInput(e.target.value)}}
        value={AIInput}/>
        <button
         type="submit"
         className="w-10  text-slate-400 hover:text-slate-600 hover:-translate-y-1 hover:scale-105 ease-in-out duration-200"> <FaArrowUp/></button>
      </form>
    </div>
  )
}

export default InputBubble
