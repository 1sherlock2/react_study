import React from "react";
import s from "./Music.module.css";

const Music = React.memo(props => {
	return (
		<div style={{fontSize: '30px'}}>
			<blockquote >
				Music
			</blockquote>
		</div>
	)
})

export default Music;