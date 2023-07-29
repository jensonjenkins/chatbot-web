import React from "react";

type MessageBoxProps = {
    id: boolean
    data: string
    isDarkMode: boolean
}
const MessageBox: React.FC<MessageBoxProps> = ({ id, data, isDarkMode}) => {
    let userStyle = "mx-3 my-1 py-2 px-2 whitespace-normal break-words w-fit h-auto max-w-xs bg-sky-500 text-sm rounded-2xl text-white font-sm"
    let botStyle = `mx-3 my-1 py-2 px-2 whitespace-normal break-words w-fit h-auto max-w-xs text-sm rounded-2xl font-sm ${isDarkMode?"bg-[#484954] text-white":"bg-gray-300"}`
    
    return (
        <>
            {data && <div className={`flex ${id? "flex-row-reverse":""} w-full min-h-fit`}>
                <div className={`${id ? userStyle : botStyle}`}>
                    {data}
                </div>
            </div>}
        </>
    )
}

export default MessageBox;