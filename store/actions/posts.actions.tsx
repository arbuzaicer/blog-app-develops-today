import api from '../../pages/api/api';
import { CREATE_POST, GET_POSTS, REMOVE_SINGLE_DATA, UPDATE_SINGlE_DATA } from '../types';

export const getPosts = () => {
  return (dispatch: any) => {
    api
      .getPosts()
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createPost = (title: string, body: string) => {
  return (dispatch: any) => {
    api
      .createPost(title, body)
      .then((res) => {
        console.log(res);
        dispatch({
          type: CREATE_POST,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const singlePost = (id: any) => {
  return (dispatch: any) => {
    api
      .singlePost(id)
      .then((res) => {
        dispatch({
          type: REMOVE_SINGLE_DATA,
        });
        dispatch({
          type: UPDATE_SINGlE_DATA,
            payload: {
              title: res.data.title,
              body: res.data.body,
            }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
