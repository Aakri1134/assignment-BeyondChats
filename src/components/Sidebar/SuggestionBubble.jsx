import { useEffect, useState } from "react"
import suggestionAI from "../../dummyData/suggestion"
import { useGlobalContext } from "../../context/GlobalContext"

const SuggestionBubble = ({ className }) => {
  const [data, setData] = useState(null)

  const {chatID} = useGlobalContext()
  useEffect(() => {
    getData()
  }, [chatID])

  const getData = async () => {
    setData(suggestionAI)
  }
  return (
    <button
      className={` bg-background w-fit max-w-96 px-3 py-2 rounded-lg m-3 hover:shadow-md hover:scale-105 duration-100 ease-in-out ${className}`}
    >
      {data ? (
        <h1 className=" text-sm">
          <span className=" font-bold">Suggested </span>
          {data.text}
        </h1>
      ) : (
        <h1>loading....</h1>
      )}
    </button>
  )
}

export default SuggestionBubble
