
const StylishButton = () => {
    return (
        <button className="bg-blue-950 text-blue-100 border border-blue-400 font-medium overflow-hidden relative px-10 py-4 rounded-md hover:brightness-150 border-b active:opacity-75 outline-none duration-300 ease-linear group">
            <span className="bg-blue-400 shadow-[#00d4ff] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Say Hello
        </button>
    )
}

export default StylishButton;