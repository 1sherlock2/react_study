import React from "react";
import Messages from "./Messages";
import {addMessages, textareaChangesInMessages} from "../../redux/Messages_reducer";
import {connect} from "react-redux";


class MessagesContainer extends React.Component {
	constructor(props) {
		super(props);
	}
		newMessages = React.createRef();
	onTextareaChangesInMessages = () => {
		let text = this.newMessages.current.value
		this.props.textareaChangesInMessages(text);
	};
	onAddMessages = () => {
		this.props.addMessages();
	}

	render() {
		return <Messages companionsData={this.props.companionsData}
										 dialogsData={this.props.dialogsData}
										 currentDialogsData={this.props.currentDialogsData}
										 onTextareaChangesInMessages={this.onTextareaChangesInMessages}
										 onAddMessages={this.onAddMessages}
										 newMessages={this.newMessages}
					/>
	}
}

let mapStateToProps = (state) => {
	return {
		dialogsData: state.messagesData.dialogsData,
		companionsData: state.messagesData.companionsData,
		currentDialogsData: state.messagesData.currentDialogsData,
	}
}
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addMessages: () => {
// 			dispatch(addMessagesActionCreator());
// 		},
// 		textareaChangesInMessages: (text) => {
// 			dispatch(textareaChangesInMessagesActionCreator(text))
// 		}
// 	}
// }

export default connect(mapStateToProps, {addMessages, textareaChangesInMessages})(MessagesContainer)


