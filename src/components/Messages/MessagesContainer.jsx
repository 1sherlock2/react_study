import React from "react";
import Messages from "./Messages";
import {addMessages, textareaChangesInMessages} from "../../redux/Messages_reducer";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";


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
										 isAuth={this.props.isAuth}
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


// export default authRedirectComponent(connect(mapStateToProps, {addMessages, textareaChangesInMessages})(MessagesContainer))

export default compose(
	(connect(mapStateToProps, {addMessages, textareaChangesInMessages})),
	authRedirectComponent
	)(MessagesContainer)

