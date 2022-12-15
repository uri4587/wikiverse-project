import React from 'react'
import apiURL from '../api';

export function SinglePage({setArticleData, articleData, fetchPages}) {
    // console.log(articleData)
    const authorName = articleData.author.name
    const tags = articleData.tags.map(tag => tag.name)

    const handleClick = () => {
        setArticleData(null);
    }

    const fetchDelete = async (slug) => {
        
        const res = await fetch(`${apiURL}/wiki/${slug}`, {
            method: "DELETE"
        });
        const data = await res.json();
        fetchPages();
        setArticleData(null);
    }

    const handleDelete = (e) => {
        
        fetchDelete(e.target.value)
    }

    return (
        <>
            <h1>{articleData.title}</h1>
            <p><b>Author:</b> {authorName}</p>
            <p><b>Published:</b> {articleData.createdAt}</p>
            <p><b>Content:</b> {articleData.content}</p>
            <p><b>Tags:</b> {tags}</p>
            <button onClick={handleDelete} value={articleData.slug}>Delete</button>
            <button onClick={handleClick}>Back to Wiki List</button>

        </>
    )
}

