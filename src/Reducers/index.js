import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extention";

import signIn from "./login";

const reducers=combineReducers({signIn,tasks});

const store=()=>{
    return createStore(reducers,composeWithDevTools());
};
export default store();