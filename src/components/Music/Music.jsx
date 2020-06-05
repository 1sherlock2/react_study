import React from "react";
import s from "./Music.module.css";

const Music = React.memo(props => {
	return (
		<div className={s.music}>
			<h1> Music </h1>
		</div>
	)
})

export default Music;