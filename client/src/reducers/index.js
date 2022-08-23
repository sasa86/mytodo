import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import filtersReducer from "../filters/filterReducer";

export default combineReducers({
    item: itemReducer,
    filters: filtersReducer
})