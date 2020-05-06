const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UN_FOLLOW = 'UN_FOLLOW';


let initialState = {
	users: [
		{id: 0, name: 'Dmitry', surname:'Dimitrov', status: true, location: {country: 'Belarus', city: 'Minsk'}, description: 'I am looking for a job right now',img: "https://www.meme-arsenal.com/memes/3e60797fbf08b83e23038c91f6b735a1.jpg"},
		{id: 1, name: 'Ivan', surname:'Dimitrov', status: false, location: {country: 'Russia', city: 'Moscow'}, description: 'This section is very good',img: "https://www.meme-arsenal.com/memes/3e60797fbf08b83e23038c91f6b735a1.jpg"},
		{id: 2, name: 'Sveta', surname:'Dimitrov', status: true, location: {country: 'USA', city: 'New-York'}, description: 'New-York the best city in the world',img: "https://www.meme-arsenal.com/memes/3e60797fbf08b83e23038c91f6b735a1.jpg"},
		{id: 3, name: 'Muslim', surname:'Dimitrov', status: false, location: {country: 'Ingushetia', city: 'Magas'}, description: 'I am strong man and very smart',img: "https://www.meme-arsenal.com/memes/3e60797fbf08b83e23038c91f6b735a1.jpg"},
	]
}

let usersReducer = (state=initialState,action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
			}
		case FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.userId) {
						return  {...el, status: true}
					}
				})
			}
		case UN_FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.userId) {
						return {...el, status: false}
					}
				})
			}
		default:
			return state
	}
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (userId) => ({type: FOLLOW,userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW,userId});

export default usersReducer;