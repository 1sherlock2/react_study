import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = React.memo(props => {
	return (
		<div className={s.dialogs}>
			{props.message}
		</div>
	)
})
export default Dialogs;