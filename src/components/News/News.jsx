import React from "react";
import s from "./News.module.css";
import News_posts from "./News_posts/News_posts";
import {addNewsActionCreator, textareaChangesNewsPostActionCreator} from "../../redux/News_reducer";

const News = (props) => {
	let mapNews_post = props.state.newsData.newsPosts.map(el => <News_posts ed={el.id} posts={el.posts} />);
	let newsElement = React.createRef();

	let addNews = () => {
		props.dispatch(addNewsActionCreator());
		props.state.currentNewsData = '';
	}

	let textareaChangesNewsPost = () => {
		let text = newsElement.current.value;
		props.dispatch(textareaChangesNewsPostActionCreator());
	}

	return (
		<div className={s.news}>
				<h1>News today</h1>
				<textarea ref={newsElement} onChange={textareaChangesNewsPost} value={props.state.newsData.newsPosts} />
				<button onClick={addNews} />
				<div className={s.news_post}>
					{mapNews_post}
				</div>
		</div>
	)
}

export default News;