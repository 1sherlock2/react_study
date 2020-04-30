import React from "react";
import s from "./Friends.module.css";
import Friend_content from "./Friend_content/Friend_content";


const Friends = (props) => {
	let friendsElement = props.friendsData.map(el => <Friend_content name={el.name}  />);
	return (
		<div className={s.friends}>
			{friendsElement};
		</div>
	)
}

export default Friends;