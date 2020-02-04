import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/posts.reducer';
import home from './reducers/home.reducer';
import detail from './reducers/detail.reducer';
import gallery from './reducers/gallery.reducer';

export default createStore(
    combineReducers({posts,home,detail,gallery}),
    applyMiddleware(thunk)
)