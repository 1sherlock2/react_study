import React from "react";
import s from "./Messages.module.css";
import Companion from "./Companion/Companion_Class";
import Dialogs from "./Dialogs/Dialogs_Class";


class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.companionElements = this.props.companionsData.map((el) => <Companion  id={el.id} name={el.name}/>);
		this.messageElements = this.props.dialogsData.map((el) => <Dialogs message={el.message} />)
		this.newMessages = React.createRef();
	}
		onTextareaChangesInMessages = () => {
			let text = this.newMessages.current.value
			this.props.textareaChangesInMessages(text);
		};
		onAddMessages = () => {
			this.props.addMessages();
		};

	render() {
		return (
			<div className={s.messages}>
				<div className={s.companion}>
					{this.companionElements}
				</div>
				<div className={s.dialogs}>
					{this.messageElements}
				</div>
				<div className={s.messagesAdd}>
					<textarea onChange={this.onTextareaChangesInMessages} ref={this.newMessages} value={this.props.currentDialogsData} />
					<button onClick={this.onAddMessages}>Add </button>
				</div>
			</div>
		)
	}
}

export default Messages;