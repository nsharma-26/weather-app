import { combineReducers } from "redux";
import reducer from "./reducers";

const rootReducer = combineReducers({
    todo : reducer,
});

export default rootReducer;
