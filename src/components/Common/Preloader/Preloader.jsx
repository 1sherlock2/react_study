import React from "react";
import loading from "../../../img/loading.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
	return (
		<div className="progress">
			<div className="indeterminate"></div>
		</div>
	)
}

export default Preloader;