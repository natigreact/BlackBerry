import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  
    postsData:[
        {id:1,message:'Hi, how are you?',likesCount:'15 likes'},
        {id:2,message:'Its my new post',likesCount:'20 likes'},
        {id:3,message:'Look this post',likesCount:'15 likes'},
        {id:4,message:'Looking for a job',likesCount:'8 likes'},
        {id:5,message:'Reading posts',likesCount:'10 likes'},
       ],
    newPostText: '',
    profile: null
       
};


const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
      case ADD_POST: {
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
        return {
        ...state,
        postsData:[...state.postsData, newPost],
        newPostText: ''};
      }
      case UPDATE_NEW_POST_TEXT: {
        return {
        ...state,
        newPostText: action.newText};
      }
      case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile

        }
      }
      default:
        return state;
      
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


//thunks

export const getUserProfile = (userId) => {
  return (dispatch) => {
   /*  dispatch(toggleIsFetching(true)) */
  
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
        });
    }
}

//
export default profileReducer;

