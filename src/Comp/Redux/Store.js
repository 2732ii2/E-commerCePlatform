import {createStore} from "redux";
import Reducer from "./Reducer.js";

var store = createStore(Reducer);
export default store;