import React from "react";
import s from "./News.module.css";
import News_posts from "./News_posts/News_posts";

const News = (props) => {
	let mapNews_post = props.newsPosts.map((el) => <News_posts id={el.id} posts={el.newsPost} />);

	let newsElement = React.createRef();
	let onTextareaChangesNewsPost = () => {
		props.textareaChangesNewsPost(newsElement.current.value);
	};
	let onAddNews = () => {
		props.addNews();
	}
	return (
		<div className={s.news}>
			<div className="h1">
				<h1>News today</h1>
			</div>
			<div className={s.action}>
				<textarea ref={newsElement} onChange={onTextareaChangesNewsPost} value={props.currentNewsData} />
				<button onClick={onAddNews}> Add News </button>
			</div>
			<div className={s.news_posts}>
				{mapNews_post}
			</div>
		</div>
	)
}

export default News;