import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";



const Messages = (props) => {
	let companionElements = props.companionsData.map(el => <Companion  id={el.id} name={el.name}/>);
	let messageElements = props.dialogsData.map(el => <Dialogs message={el.message} />)

	let currentDialogsData = props.currentDialogsData;

	let newMessages = React.createRef();
	let onTextareaChangesInMessages = () => {
		let text = newMessages.current.value;
		props.textareaChangesInMessages(text);
	};

	let onAddMessages = () => {
		props.addMessages();
	};

	return (
		<div className={s.messages}>
			<div className={s.companion}>
				{companionElements}
			</div>
			<div className={s.dialogs}>
				{messageElements}
			</div>
			<div className={s.messagesAdd}>
				<textarea onChange={onTextareaChangesInMessages} ref={newMessages} value={currentDialogsData} />
				<button onClick={onAddMessages}>Add </button>
			</div>
		</div>
	)
}

export default Messages;