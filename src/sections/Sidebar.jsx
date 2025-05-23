const Sidebar = ({ className }) => {
  return (
    <div className={` w-[425px] ${className}`}>
      <div className="h-14 border-b-2 flex items-center pl-6 shadow-md">
        <h1 className=" text-2xl font-sans font-bold text-button">
          Your Inbox
        </h1>
      </div>
    </div>
  )
}

export default Sidebar
