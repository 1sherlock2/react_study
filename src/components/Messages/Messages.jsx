import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
	let companionsData = [
		{id:1, name:"Sergey"},
		{id:2, name:"Andrey"},
		{id:3, name:"Askar"},
		{id:4, name:"Muslim"},
		{id:5, name:"Petr"},
	];
	let companionElements = companionsData.map(el => <Companion  id={el.id} name={el.name}/>);

	let messagesData = [
		{id:1, message:"first message"},
		{id:2, message:"second message"},
		{id:3, message:"third message"},
		{id:4, message:"fourth message"},
	]
	let messageElements = messagesData.map(el => <Dialogs message={el.message} />)

	return (
		<div className={s.messages}>
			<div className={s.companion}>
				{companionElements}
			</div>
			<div className={s.dialogs}>
				{messageElements}
			</div>
		</div>
	)
}

export default Messages;