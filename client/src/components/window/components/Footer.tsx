import React, {useState} from "react";
import {RiInformationFill} from "react-icons/ri"
import {BsFillSunFill, BsGithub} from "react-icons/bs"
import {MdNightsStay} from "react-icons/md"

type FooterProps = {
    onPropChange:(value:boolean)=>void;
    onAboutChange:(value:boolean)=>void;
}

const Footer: React.FC<FooterProps> = ({onPropChange, onAboutChange}) =>{
    const [darkMode, setDarkMode] = useState(true);
    const [showAbout, setShowAbout] = useState(false);
    const setMode = () =>{
        setDarkMode(!darkMode);
        onPropChange(!darkMode);
    }
    const setShow = () =>{
        setShowAbout(!showAbout);
        onAboutChange(!showAbout);
    }
    let style = `w-9 h-9 p-auto rounded-lg mx-1 transition duration-150 ease-out ${darkMode?"bg-[#343541] hover:bg-[#40414F]":"border bg-white"}`
    return(
        <>
            <div className="flex flex-row my-2">

                <button onClick={setShow} className={style}>
                    <RiInformationFill className="mx-auto" color="#6B6C7B" size={24}/>
                </button>

                <a href="https://github.com/jensonjenkins/transformer-chatbot" target="_blank" className={style}>
                    <BsGithub className="mx-auto my-1.5" color="#6B6C7B" size={24}/>
                </a>

                <button onClick={setMode} className={style}>
                    {!darkMode?
                    <BsFillSunFill className="mx-auto" color="#6B6C7B" size={24}/>:
                    <MdNightsStay className="mx-auto" color="#6B6C7B" size={24}/>}
                </button>   
 
            </div>
        </>
    )   
}

export default Footer;