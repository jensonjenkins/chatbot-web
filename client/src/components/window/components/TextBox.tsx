import React, { useState, ChangeEvent, useRef, FormEvent, KeyboardEvent } from "react";
import { FaArrowUp } from 'react-icons/fa'

type TextBoxProps = {
    isDarkMode: boolean
}
const TextBox = ({ isDarkMode }: TextBoxProps) => {
    const [formData, setFormData] = useState({
        query: ''
    });
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        // console.log(formData.query)

        if (textareaRef.current) {
            textareaRef.current.scrollTop = 0;

            const { scrollHeight, clientHeight } = textareaRef.current;
            textareaRef.current.style.height = `${scrollHeight}px`;
            textareaRef.current.scrollTop = scrollHeight - clientHeight;
        }
        event.target.style.height = '36px'
        let scHeight = event.target.scrollHeight
        if (scHeight > 32 * 5) {
            event.target.style.height = `${36 * 5}px`
        } else {
            event.target.style.height = `${event.target.scrollHeight}px`;
        }

    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/query/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error(error)
        }

    }
    const onEnterPress = (e: KeyboardEvent) => {
        if (e.key == 'Enter' && e.shiftKey == false) {
            e.preventDefault();
            handleSubmit(e);
            setFormData({query:""})
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} ref={el=>handleSubmit}>
                <div className="flex flex-row absolute bottom-0">
                    <textarea
                        name="query"
                        className={`w-120 h-8 rounded-2xl mx-2 my-2 py-2 px-2 font-medium transition duration-150 focus:border-sky-500 ${isDarkMode ? "bg-[#40414F] text-white" : "bg-white border"}`}
                        value={formData.query}
                        onChange={handleChange}
                        onKeyDown={onEnterPress}
                        rows={1}
                        style={{
                            fontSize: '14px',
                            resize: 'none',
                            width: '450px',
                            height: '36px',
                            outline: 'none'
                        }}
                        placeholder="Enter your query...">
                    </textarea>
                </div>

                <button type="submit" className="w-9 h-9 my-2 bg-sky-500 rounded-full absolute bottom-0 right-2 transition duration-100 ease-in-out hover:bg-sky-400">
                    <FaArrowUp className="m-auto" color="white" />
                </button>
            </form>

        </>
    )
}

export default TextBox