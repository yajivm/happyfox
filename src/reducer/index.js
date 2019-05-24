import {combineReducers} from 'redux';

//page component
import boardListReducer from './boardListReducer.js';

const AppReducer = combineReducers({
    trelloList: boardListReducer
});

export default AppReducer;