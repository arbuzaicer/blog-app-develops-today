import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import PostsReducer from './reducers/posts.reducer';

const reducers = combineReducers({
    PostsReducer
});

export const initializeStore = () => {
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))
    )
};
