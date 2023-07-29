import React from 'react';
import { SiDjango, SiTensorflow, SiKeras, SiReact, SiDocker, SiTailwindcss } from 'react-icons/si';

type aboutProps = {
    showAbout: boolean
    darkMode: boolean
}
const About = ({ showAbout, darkMode }: aboutProps) => {
    const textStyle = `mx-3 mt-1 py-2 px-2 whitespace-normal break-words w-fit h-auto max-w-xs text-sm font-sm  ${darkMode ? "text-white" : ""}`
    return (
        <>
            {showAbout &&
                <div className='flex flex-col'>
                    <div className={`w-72 h-56 mx-4  rounded-2xl ${darkMode ? "bg-[#343541] " : "bg-white border"}`}>
                        <h1 className={`mx-16 mt-4 mb-2.5 font-bold ${darkMode ? "text-white" : ""}`}>Model Architecture</h1>
                        <p className={textStyle}>
                            Type: Encoder-Decoder transformer
                        </p>

                        <p className={textStyle}>
                            No. of parameters: ~36M
                        </p>

                        <p className={textStyle}>
                            Dataset: <a href="https://huggingface.co/datasets/MBZUAI/LaMini-instruction" target="_blank" className='underline'>LaMini-Instruction</a>
                        </p>
                        <p className={textStyle}>
                            Tokenizer: Custom BERT sub-word
                        </p>

                    </div>
                    <div className={` w-72 h-24 mx-4 mt-4 rounded-2xl ${darkMode ? "bg-[#343541] " : "bg-white border"}`}>
                        <h1 className={`ml-24 mt-3 mb-4 font-bold  ${darkMode ? "text-white" : ""}`}>Made With</h1>

                        <p className={`flex flex-row mx-3 ${darkMode ? "text-white" : ""}`}>
                            <SiTensorflow className="mx-auto" color="#6B6C7B" size={24} />
                            <SiKeras className="mx-auto" color="#6B6C7B" size={24} />
                            <SiDjango className="mx-auto" color="#6B6C7B" size={24} />
                            <SiDocker className="mx-auto" color="#6B6C7B" size={24} />
                            <SiReact className="mx-auto" color="#6B6C7B" size={24} />
                            <SiTailwindcss className="mx-auto" color="#6B6C7B" size={24} />

                        </p>
                    </div>
                </div>}
        </>
    )
}

export default About;