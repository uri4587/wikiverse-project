import React, {useState} from 'react'
import apiURL from '../api';

export function SubmitForm({fetchPages, setToggleForm}) {
    const [submitData, setSubmitData] = useState({title: "", content: "", name: "", email: "", tags: ""});

    const handleTitleChange = (e) => {
        
        setSubmitData({...submitData, title: e.target.value})
        
    }
    const handleContentChange = (e) => {
        setSubmitData({...submitData, content: e.target.value})
    }
    const handleNameChange = (e) => {
        setSubmitData({...submitData, name: e.target.value})
    }
    const handleEmailChange = (e) => {
        setSubmitData({...submitData, email: e.target.value})
    }
    const handleTagsChange = (e) => {
        setSubmitData({...submitData, tags: e.target.value})
    }
//    console.log(submitData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(submitData)
        const res = await fetch(`${apiURL}/wiki`, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        });
        // console.log(res)
        if(res.status === 200) {
            fetchPages();
            setToggleForm(false);
        }
    }

   
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTitleChange} placeholder='Title'/>
                <br></br>
                <input onChange={handleContentChange} placeholder='Article Content'/>
                <br></br>
                <input onChange={handleNameChange} placeholder='Author Name'/>
                <br></br>
                <input onChange={handleEmailChange} placeholder='Author Email'/>
                <br></br>
                <input onChange={handleTagsChange} placeholder='Tags'/>
                <br></br>
                {/* <input placeholder="Create Page" type="submit"/> */}
                <button type="submit">Create Page</button>
            </form>
        </>
    )
}
