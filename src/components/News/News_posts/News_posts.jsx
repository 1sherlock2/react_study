import React from "react";
import s from "./../News.module.css"

const News_posts = (props) => {
	return (
		<div className={s.news_post}>
			{props.posts}
		</div>
	)
}

export default News_posts;