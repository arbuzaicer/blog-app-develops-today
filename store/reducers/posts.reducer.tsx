import {
  CREATE_POST,
  GET_POSTS,
  REMOVE_SINGLE_DATA,
  UPDATE_SINGlE_DATA,
} from '../types';

type Post = {
  title: string
  body: string
}

type InitialStateType = {
  posts: Array<Post>
  singlePostTitle: string
  singlePostBody: string
}

const initialState = {
  posts: [],
  singlePostTitle: "",
  singlePostBody: "",
};

const PostsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case REMOVE_SINGLE_DATA: {
      return {
        ...state,
        singlePostTitle: "",
        singlePostBody: "",
      };
    }
    case UPDATE_SINGlE_DATA: {
      return {
        ...state,
        singlePostTitle: action.payload.title,
        singlePostBody: action.payload.body,
      };
    }
    case CREATE_POST: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default PostsReducer;
