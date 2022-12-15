import React from 'react';
import { Page } from './Page';

export const PagesList = ({articleData, setArticleData, pages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page articleData={articleData} setArticleData={setArticleData} page={page} key={idx} />
			})
		}
	</>
} 
