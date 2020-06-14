import React from "react";
import s from "./News.module.css";
import News_posts from "./News_posts/News_posts";
import {NewsPostReduxFrom} from "./NewsForm/NewsForm";

const News = React.memo(props => {
	let mapNews_post = props.newsPosts.map((el) => <News_posts key={el.id} id={el.id} posts={el.newsPost}/>);
	let addNewsForm = (values) => {
		props.addNews(values.newsPosts)
	}
	return (
		<div className={s.news}>
			<div className={s.h1}>
				<blockquote style={{fontSize: '30px'}}>
					News today
				</blockquote>
			</div>
			<div>
				<NewsPostReduxFrom onSubmit={addNewsForm}/>
			</div>
			<div>
				{mapNews_post}
			</div>
		</div>
	)
})

export default News;