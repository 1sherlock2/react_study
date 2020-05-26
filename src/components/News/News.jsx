import React from "react";
import s from "./News.module.css";
import News_posts from "./News_posts/News_posts";
import {NewsPostReduxFrom} from "./NewsForm/NewsForm";

const News = (props) => {
	let mapNews_post = props.newsPosts.map((el) => <News_posts id={el.id} posts={el.newsPost}/>);
	let addNewsForm = (values) => {
		props.addNews(values.newsPosts)
	}
	return (
		<div className={s.news}>
			<div className={s.h1}>
				<h1> News today </h1>
			</div>
			<div className={s.action}>
				<NewsPostReduxFrom onSubmit={addNewsForm}
													 // onSubmit={props.onSubmit}
													 // onTextareaChangesNewsPost={props.onTextareaChangesNewsPost}
													 // newsElement={props.newsElement} currentNewsData={props.currentNewsData}
													 // onAddNews={props.onAddNews}
				/>
			</div>
			<div className={s.news_posts}>
				{mapNews_post}
			</div>
		</div>
	)
}

export default News;