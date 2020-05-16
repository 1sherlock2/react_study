import React from "react";
import s from "./News.module.css";
import News_posts from "./News_posts/News_posts";
import Redirect from "react-router-dom/es/Redirect";

const News = (props) => {
	let mapNews_post = props.newsPosts.map((el) => <News_posts id={el.id} posts={el.newsPost} />);

	if (props.isAuth === false) return <Redirect to={`/login`} />
	return (
		<div className={s.news}>
			<div className={s.h1}>
				<h1>News today</h1>
			</div>
			<div className={s.action}>
				<textarea ref={props.newsElement} onChange={props.onTextareaChangesNewsPost} value={props.currentNewsData} />
				<button onClick={props.onAddNews}> Add News </button>
			</div>
			<div className={s.news_posts}>
				{mapNews_post}
			</div>
		</div>
	)
}

export default News;