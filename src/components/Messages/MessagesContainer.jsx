import React from "react";
import Messages from "./Messages_Class";
import {addMessagesActionCreator, textareaChangesInMessagesActionCreator} from "../../redux/Messages_reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
	return {
		dialogsData: state.messagesData.dialogsData,
		companionsData: state.messagesData.companionsData,
		currentDialogsData: state.messagesData.currentDialogsData,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addMessages: () => {
			dispatch(addMessagesActionCreator());
		},

		textareaChangesInMessages: (text) => {
			dispatch(textareaChangesInMessagesActionCreator(text))
		}
	}
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)


export default MessagesContainer;