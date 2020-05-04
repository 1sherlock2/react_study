import React from "react";
import Messages from "../Messages";
import {addMessagesActionCreator, textareaChangesInMessagesActionCreator} from "../../../redux/Messages_reducer";
import StoreContex from "../../../Store_contex/Store_contex";


const MessagesContainer = () => {

	return <StoreContex.Consumer>
	{
		store => {
				let state = store.getState();

				let addMessages = () => {
					store.dispatch(addMessagesActionCreator());
				}

				let textareaChangesInMessages = (text) => {
					let action = textareaChangesInMessagesActionCreator(text);
					store.dispatch(action)
				}

				return (<Messages addMessages={addMessages}
												 textareaChangesInMessages={textareaChangesInMessages}
												 currentDialogsData={state.messagesData.currentDialogsData}
												 companionsData={state.messagesData.companionsData}
												 dialogsData={state.messagesData.dialogsData}/>
				)
			}
		}
		</StoreContex.Consumer>
}

export default MessagesContainer;