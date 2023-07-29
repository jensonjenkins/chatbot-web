import React from "react";
import { useState, useEffect } from "react";

interface response{
    output:""
}

function Get(){
    const [data, setData] = useState<response[]>([{output:""}])
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch("http://127.0.0.1:8000/output/")
                const json = await response.json()
                setData(json);
            } catch(error){
                console.error("Error fetching data:", error)
            }
        }
        const interval = setInterval(fetchData, 5000);

        return ()=>{
            clearInterval(interval)
        }
    }, []);

    return (
        <div>
            {data && data[data?.length-1].output}
        </div>
    )
}


export default Get;