import React from "react";
import s from "./Dialogs.module.css";


class Dialogs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={s.dialogs}>
				{this.props.message}
			</div>
		)
	}
}
export default Dialogs;