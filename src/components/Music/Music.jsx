import React from "react";
import s from "./Music.module.css";
import Redirect from "react-router-dom/es/Redirect";

const Music = (props) => {
	if (props.isAuth === false) return <Redirect to={`/login`}/>
	return (
		<div className={s.music}>
			<h1> Music </h1>
		</div>
	)
}

export default Music;