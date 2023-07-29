import React from 'react';
import MessageBox from './MessageBox';
import { useState, useEffect, useRef } from "react";

interface response {
    output: ""
}
interface input {
    query: ""
}

type ConversationProps = {
    isDarkMode: boolean
}

const Conversation: React.FC<ConversationProps> = ({ isDarkMode }) => {
    const errorFaces = ["(^-^*)", "(;-;)", "(.,.)", "(>.<)", "\\(O_O)/", "(o^^)o", "404"]
    const pgDown = useRef<HTMLDivElement>(null);
    const [num, setNum] = useState<number>(0);
    const [logs, setLogs] = useState<string[]>([""]);
    const [error, setError] = useState<boolean>(false);

    const combine = async(a:input[], b:response[])=> {
        const result = [];
        const maxLength = Math.max(a.length, b.length);

        for (let i = 0; i < maxLength; i++) {
            if (i < a.length) {
                result.push(a[i].query);
            }
            if (i < b.length) {
                result.push(b[i].output);
            }
        }

        return result;
    }

    const fetchLogs = async () => {
        try {
            setError(false);
            const responseOutput = await fetch("http://127.0.0.1:8000/output/")
            const jsonOutput = await responseOutput.json()
        
            const responseQuery = await fetch("http://127.0.0.1:8000/query/")
            const jsonQuery = await responseQuery.json()
       
            combine(jsonQuery, jsonOutput).then((resolvedArray)=>{
                console.log(resolvedArray)
                setNum(resolvedArray.length)
                setLogs(resolvedArray)
            })
        } catch (error) {
            console.error("Error fetching data:", error)
            setError(true);

        }
    }
    useEffect(()=>{
        pgDown.current?.scrollIntoView({behavior:"smooth"});
    }, [num])

    useEffect(() => {
        const intervalLogs = setInterval(fetchLogs, 1000);
        return () => {
            clearInterval(intervalLogs)
        }

    }, []);

    return (
        <>
            <div className="relative flex flex-col w-128 h-124 overflow-y-auto mx-auto">
                {error &&
                <div className={`mx-auto my-auto px-8 py-4 w-80 h-44 rounded-2xl ${isDarkMode?"bg-[#40414F]":"bg-slate-50 border"}`}>
                    <h1 className={`text-4xl my-5 font-semibold ${isDarkMode?"text-white":"text-[#40414F]"}`}>{errorFaces[Math.floor(Math.random() * 6) + 1]}</h1>
                    <p className={`${isDarkMode?"text-white":"text-[#40414F]"}`}>Something is wrong on our end, hang on while we fix the problem.</p>
                </div>
                }
                {logs.map((e:string, i:number)=><MessageBox isDarkMode={isDarkMode} id={i%2===0} data={e}/>)}
                <div ref={pgDown}></div>
            </div>
        </>
    )
}

export default Conversation;