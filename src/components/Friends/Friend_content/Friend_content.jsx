import React from "react";
import s from "./Friend_content.module.css";



const Friend_content = (props) => {
	return (
		<div className={s.friend_content}>
			{props.name}
		</div>
	)
}

export default Friend_content;