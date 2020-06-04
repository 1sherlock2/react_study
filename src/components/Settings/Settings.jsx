import React from "react";
import s from "./Settings.module.css";
import Redirect from "react-router-dom/es/Redirect";


const Settings = React.memo(props => {

	return (
		<div className={s.settings}>
			<h1> Settings </h1>
		</div>
	)
})

export default Settings;