import React from "react";
import loading from "../../../img/loading.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
	return (
		<div className={s.preloader}>
			<img src={loading} />
		</div>
	)
}

export default Preloader;