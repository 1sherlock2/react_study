import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";
import {MessagesReduxForm} from "./MessagesForm/MessagesForm";

const Messages = (props) => {
	let companionElements = props.companionsData.map((el) => <Companion id={el.id} name={el.name}/>)
	let messageElements = props.dialogsData.map((el) => <Dialogs message={el.message}/>)

	return (
		<div className={s.messages}>
			<div className={s.companion_element}>
				<ul>
					{companionElements}
				</ul>
			</div>
			<div className={s.dialogs}>
				<div className={s.message_element}>
					<div className={s.messages_form}>
						<MessagesReduxForm onSubmit={props.addMessagesForm}
															 addMessagesForm={props.addMessagesForm}
						/>
					{messageElements}
					</div>
				</div>
			</div>
		</div>
	)
}

// <ul className="collection with-header">
// 	<li className="collection-header"><h4>First Names</h4></li>
// 	<li className="collection-item">
// 		<div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div>
//  </li>
// 	<li className="collection-item">
// 		<div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div>
//  </li>
// 	<li className="collection-item">
// 		<div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div>
//  </li>
// 	<li className="collection-item">
// 		<div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div>
//  </li>
// </ul>

export default Messages