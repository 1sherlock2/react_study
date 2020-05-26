import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";
import {addMessages} from "../../redux/Messages_reducer";


class MessagesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	// onTextareaChangesInMessages = (e) => {
	// 	let text = e.currentTarget.value
	// 	this.props.textareaChangesInMessages(text);
	// }
	// onAddMessages = (value) => {
	// 	this.props.addMessages(value.message);
	// }
	message = this.props.dialogsData.message
	addMessagesForm = (values) => {
		this.props.addMessages(values.message)
	}

	render() {
		return <Messages companionsData={this.props.companionsData}
										 addMessagesForm={this.addMessagesForm}
										 dialogsData={this.props.dialogsData}
										 isAuth={this.props.isAuth}
										 // currentDialogsData={this.props.currentDialogsData}
										 // onTextareaChangesInMessages={this.onTextareaChangesInMessages}
										 // onAddMessages={this.onAddMessages}
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

export default compose(
	(connect(mapStateToProps, {addMessages})),
	authRedirectComponent
)(MessagesContainer)

