import React from "react";
import TextBox from "./components/TextBox";
import Conversation from "./components/Conversation";
import "../../index.css"


type MainWindowProps = {
    isDarkMode: boolean
}
const MainWindow: React.FC<MainWindowProps> = ({ isDarkMode }) => {

    return (
        <>
            {/* <h2 className={`text-3xl ${isDarkMode ? "text-gray-100" : "text-gray-500"} font-semibold my-1`}>miniGPT</h2> */}
            <div className={`relative w-128 h-136 rounded-2xl transition duration-150 ${isDarkMode ? "bg-[#343541] border-black" : "bg-white border "}`}>
                <div className="flex flex-row w-7/8 h-8 rounded-xl mx-2 my-2 px-1">
                    <div className="w-3 h-3 rounded-lg bg-[#F86158] my-auto mx-1" />
                    <div className="w-3 h-3 rounded-lg bg-[#FBBF2D] my-auto mx-1" />
                    <div className="w-3 h-3 rounded-lg bg-[#2CCA3D] my-auto mx-1" />
                    <h1 className={`my-auto mx-20 font-bold ${isDarkMode ? "text-white" : ""}`}>Transformer Model Chatbot</h1>
                </div>
                <Conversation isDarkMode={isDarkMode}/>
                <TextBox isDarkMode={isDarkMode}/>
            </div>

        </>
    )
}

export default MainWindow;