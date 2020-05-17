import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion_Class";
import Dialogs from "./Dialogs/Dialogs_Class";
import Redirect from "react-router-dom/es/Redirect";


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
				<textarea onChange={props.onTextareaChangesInMessages} ref={props.newMessages}
									value={props.currentDialogsData}/>
				<button onClick={props.onAddMessages}>Add</button>
			</div>
		</div>
	)
}

export default Messages;