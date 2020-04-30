import {rerenderEntireTree} from "../Render";

let state = {
	postData: [
		{id:1, message:"Hi, how are you?", likesCount:0},
		{id:2, message:"It's my first post", likesCount:34},
		{id:3, message:"It is my second post", likesCount:12},
	],
	messagesData: {
		companionsData : [
			{id:1, name:"Sergey"},
			{id:2, name:"Andrey"},
			{id:3, name:"Askar"},
			{id:4, name:"Muslim"},
			{id:5, name:"Petr"},
		],
		dialogsData : [
			{id:1, message:"first message"},
			{id:2, message:"second message"},
			{id:3, message:"third message"},
			{id:4, message:"fourth message"},
		],
	},
	friendsData: [
		{id:1, name:"friend 1", avatar:""},
		{id:2, name:"friend 2", avatar:""},
		{id:3, name:"friend 3", avatar:""},
	]
}

export let addPost = (postMessage) => {
	let newMessage = {
		id: 4,
		message: postMessage,
		likeCount: 1,
	};
	state.postData.push(newMessage);
	rerenderEntireTree(state)
}
// export	default rerenderEntireTree(state)

export default state;
