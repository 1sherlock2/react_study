import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			{props.message}
		</div>
	)
}
export default Dialogs;