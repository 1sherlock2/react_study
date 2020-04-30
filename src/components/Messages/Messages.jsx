import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
	let companionElements = props.messagesData.companionsData.map(el => <Companion  id={el.id} name={el.name}/>);
	let messageElements = props.messagesData.dialogsData.map(el => <Dialogs message={el.message} />)

	let newMessages = React.createRef();
	let addMessages = () => {
		let text = newMessages.current.value;
		alert(text);
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
				<textarea ref={newMessages}></textarea>
				<button onClick={addMessages}>Add </button>
			</div>
		</div>
	)
}

export default Messages;