import React from "react";
import s from "../News.module.css";
import {Field, reduxForm} from "redux-form";

const NewsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={'textarea'} name={'newsPosts'}
						 // ref={props.newsElement}
						 // onChange={props.onTextareaChangesNewsPost}
						 // value={props.currentNewsData}
			/>
			<button> Add News </button>
			{/*<button onClick={props.onAddNews}> Add News</button>*/}
		</form>
	)
}

export const NewsPostReduxFrom = reduxForm({
	form: 'newsForm',
})(NewsForm)
