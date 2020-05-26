import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion_Class";
import Dialogs from "./Dialogs/DialogsContainer";
import {MessagesReduxForm} from "./MessagesForm/MessagesForm";

const Messages = (props) => {
	let companionElements = props.companionsData.map((el) => <Companion id={el.id} name={el.name}/>)
	let messageElements = props.dialogsData.map((el) => <Dialogs message={el.message}/>)

	return (
		<div className={s.messages}>
			<div className={s.companion}>
				{companionElements}
			</div>
			<div className={s.dialogs}>
				{messageElements}
			</div>
			<div className={s.messagesAdd}>
				<MessagesReduxForm onSubmit={props.addMessagesForm}
													 addMessagesForm={props.addMessagesForm}
													 // onTextareaChangesInMessages={props.onTextareaChangesInMessages}
													 // currentDialogsData={props.currentDialogsData}
													 // onAddMessages={props.onAddMessages}
				/>
			</div>
		</div>
	)
}

export default Messages