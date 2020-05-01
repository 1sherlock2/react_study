import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";
import {addMessagesActionCreator, textareaChangesInMessagesActionCreator} from "../../redux/State";


const Messages = (props) => {
	let companionElements = props.state.messagesData.companionsData.map(el => <Companion  id={el.id} name={el.name}/>);
	let messageElements = props.state.messagesData.dialogsData.map(el => <Dialogs message={el.message} />)

	let newMessages = React.createRef();
	let addMessages = () => {
		props.dispatch(addMessagesActionCreator());
		props.state.messagesData.currentDialogsData = '';
	}
	let textareaChangesInMessages = () => {
		let text = newMessages.current.value;
		let action = textareaChangesInMessagesActionCreator(text);
		props.dispatch(action)
	}

	return (
		<div className={s.messages}>
			<div className={s.companion}>
				{companionElements}
			</div>
			<div className={s.dialogs}>
				{messageElements}
			</div>
			<div className={s.messagesAdd}>
				<textarea onChange={textareaChangesInMessages} ref={newMessages} value={props.state.messagesData.currentDialogsData}></textarea>
				<button onClick={addMessages}>Add </button>
			</div>
		</div>
	)
}

export default Messages;