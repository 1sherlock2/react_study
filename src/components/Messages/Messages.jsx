import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";
import {MessagesReduxForm} from "./MessagesForm/MessagesForm";

const Messages = (props) => {
	let companionElements = props.companionsData.map((el) => <Companion key={el.id} id={el.id} name={el.name}/>)
	let messageElements = props.dialogsData.map((el) => <Dialogs key={el.id} message={el.message}/>)

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


export default Messages