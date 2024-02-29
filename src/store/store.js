import reducer from "./reducers/reducer";
import { createStore } from "redux";

var store=new createStore(reducer);
export default store;
