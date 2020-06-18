import React from 'react';
import profileReducer, { addPost, deletePost } from '../Profile_reducer';

const state = {
  posts: [
    {
      id: 0, message: 'Hi, how are you', likeCount: 2, photo: null,
    },
    {
      id: 1, message: 'I am fine thanks', likeCount: 2, photo: null,
    },
    {
      id: 2, message: 'It is greate', likeCount: 2, photo: null,
    },
  ],
};

it('length of posts should be increment ', () => {
  //  1.test data
  const action = addPost('alim gazdiev');
  // 2. action
  const newState = profileReducer({ state }, { action });
  // 3. expectation
  expect(newState.state.posts.length).toBe(3);
});

it('length of posts should be increment ', () => {
  //  1.test data
  const action = addPost('alim gazdiev');
  // 2. action
  const newState = profileReducer({ state }, { action });
  // 3. expectation
  expect(newState.state.posts[0].likeCount).toBe(2);
});

it('length of posts should be increment ', () => {
  const firstState = state.posts;
  const action = deletePost(2);
  const newState = profileReducer({ state }, { action });
  const secondState = state.posts;
  expect(newState.state.posts.length).toBe(2);
});
