import React, { useState, useEffect } from 'react';
import {PagesList} from './PagesList';
import {SinglePage}  from './SinglePage';
import {SubmitForm}  from './SubmitForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [articleData, setArticleData] = useState(null);
	const [toggleForm, setToggleForm] = useState(false);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	
	useEffect(() => {
		fetchPages();
	}, []);

	
	
	const renderPages = () => {
		if(toggleForm) {
			return <SubmitForm fetchPages={fetchPages} setToggleForm={setToggleForm} />
		} else if (articleData) {
			return <SinglePage fetchPages={fetchPages} apiURL={apiURL} articleData={articleData} setArticleData={setArticleData} /> 
		} else {
			return <PagesList articleData={articleData} setArticleData={setArticleData} pages={pages} /> 
		}
	}

	const handleAddClick = () => {
		
		setToggleForm(!toggleForm)
	}

	
	return (
		<main>	
			<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{!toggleForm ? <button onClick={handleAddClick} >Add a Page</button> : <button onClick={handleAddClick} >Go Back</button>}
			<br></br>
			<br></br>
			{renderPages()}
			{/* {toggleForm ? <SubmitForm /> : null}
			
			{ 
			articleData
			? 
			<SinglePage articleData={articleData} setArticleData={setArticleData} /> 
			: 
			<PagesList articleData={articleData} setArticleData={setArticleData} pages={pages} /> 
			} */}
		</main>
	)
}