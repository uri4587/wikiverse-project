import React from 'react';
import apiURL from '../api';

export const Page = ({page, key, setArticleData, articleData}) => {

  const getArticleData = async (page) => {
    const res = await fetch(`${apiURL}/wiki/${page}`)
    const data = await res.json();
    setArticleData(data);
  }
  const handleClick = (e) => {
    getArticleData(e.target.value);
  }

  
  return <>
    <button onClick={handleClick} value={page.slug} >{page.title}</button>
    <br></br>
  </>
} 
	