import React from "react";
import s from "../Messages.module.css";


const Dialogs = React.memo(props => {
	return (
		<div className={s.dialogs_messages}>
			{props.message}
		</div>
	)
})
export default Dialogs;