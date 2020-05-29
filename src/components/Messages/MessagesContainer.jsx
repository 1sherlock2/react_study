import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";
import {addMessages} from "../../redux/Reducers/Messages_reducer";


class MessagesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	message = this.props.dialogsData.message
	addMessagesForm = (values) => {
		this.props.addMessages(values.message)
	}

	render() {
		return <Messages companionsData={this.props.companionsData}
										 addMessagesForm={this.addMessagesForm}
										 dialogsData={this.props.dialogsData}
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

export default compose(
	(connect(mapStateToProps, {addMessages})),
	authRedirectComponent
)(MessagesContainer)

