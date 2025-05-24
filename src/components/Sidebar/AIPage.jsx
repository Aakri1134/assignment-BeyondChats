import SuggestionBubble from "./SuggestionBubble"
import InputBubble from "./InputBubble"

const AIPage = ({ className }) => {
  return (
    <div
      className={` flex flex-col justify-end pb-4 bottom-4 w-full ${className}`}
    >
      <div className=" absolute bottom-4 w-full">
        <SuggestionBubble />
        <InputBubble />
      </div>
    </div>
  )
}
export default AIPage
