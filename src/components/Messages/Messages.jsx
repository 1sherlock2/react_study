import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion";
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
	return (
		<div className={s.messages}>
			<div className={s.companion}>
				<Companion  name='Sergey' id='1'/>
				<Companion  name='Andrey' id='2'/>
				<Companion  name='Askar' id='3'/>
				<Companion  name='Muslim' id='4'/>
				<Companion  name='Petr' id='5'/>
			</div>
			<div className={s.dialogs}>
				<Dialogs message="first message" />
				<Dialogs message="second message" />
				<Dialogs message="third message" />
				<Dialogs message="fourth message" />
				<Dialogs message="five message" />
			</div>
		</div>
	)
}

export default Messages;