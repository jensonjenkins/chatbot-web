import React, {FormEvent, useState, useEffect} from "react";

function Submit(){
    const [formData, setFormData] = useState({
        query:''
    });

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault();

        try{
            const response = await fetch("http://127.0.0.1:8000/query/", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
        } catch (error){
            console.error('Error submitting data:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Query:
                <input 
                    type="text"
                    name="query"
                    value={formData.query}
                    onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>)

}

export default Submit;