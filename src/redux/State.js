
let rerenderEntireTree;	// просто название


let state = {
	postData: {
		posts: [
			{id: 1, message: "Hi, how are you?", likesCount: 0},
			{id: 2, message: "It's my first post", likesCount: 34},
			{id: 3, message: "It is my second post", likesCount: 12},
		],
		currentText:'',
	},
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

export const addPost = () => {
	let newMessage = {
		id: 4,
		message: state.postData.currentText,
		likeCount: 1,
	};
	state.postData.posts.push(newMessage);
	rerenderEntireTree()														// rerenderEntireTree - просто название
}

export const textareaChanges = (newText) => {
	state.postData.currentText = (newText);
	rerenderEntireTree()														// rerenderEntireTree - просто название
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;									// rerenderEntireTree - просто название
}

export default state;
