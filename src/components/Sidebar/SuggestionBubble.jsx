import { useEffect, useState } from "react"
import suggestionAI from "../../dummyData/suggestion"
import { useGlobalContext } from "../../context/GlobalContext"

const SuggestionBubble = ({ className }) => {
  const [data, setData] = useState(null)
  const [visible, setVisible] = useState(true)

  const {chatID, setAIInput} = useGlobalContext()
  useEffect(() => {
    getData()
  }, [chatID])
  useEffect(() => {
    setVisible(true)
  }, [data])

  const getData = async () => {
    setData(suggestionAI)
  }
  return (
    <button
      className={` ${visible?`block`:`hidden`} bg-background w-fit max-w-96 px-3 py-2 rounded-lg m-3 hover:shadow-md hover:scale-105 duration-100 ease-in-out ${className}`}
      onClick={() => {if(data) {setAIInput(data.text); setVisible(false)}}}
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
