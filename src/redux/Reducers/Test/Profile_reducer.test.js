import profileReducer, {addPost, deletePost} from "../Profile_reducer";
import React from "react";

let state = {
	posts: [
		{id: 0, message: 'Hi, how are you', likeCount: 2, photo: null},
		{id: 1, message: 'I am fine thanks', likeCount: 2, photo: null},
		{id: 2, message: 'It is greate', likeCount: 2, photo: null},
	],
};

it('length of posts should be increment ', () => {
	//  1.test data
	let action = addPost("alim gazdiev");
	// 2. action
	let newState = profileReducer({state}, {action});
	// 3. expectation
	expect(newState.state.posts.length).toBe(3);
});

it('length of posts should be increment ', () => {
	//  1.test data
	let action = addPost("alim gazdiev");
	// 2. action
	let newState = profileReducer({state}, {action});
	// 3. expectation
	expect(newState.state.posts[0].likeCount).toBe(2);

});

it('length of posts should be increment ', () => {
	let firstState = state.posts;
	let action = deletePost(2)
	let newState = profileReducer({state}, {action});
	let secondState = state.posts;
	expect(newState.state.posts.length).toBe(2);
});


