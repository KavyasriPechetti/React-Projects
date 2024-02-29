import counterReducer from "./counter.reducer";
import studentReducer from "./student.reducer";
import todoReducer from "./todo.reducer";
import productReducer from "./product.reducer";
import { combineReducers } from "redux";

var reducer=combineReducers({
    counter:counterReducer,
    todolist:todoReducer,
    students:studentReducer,
    products:productReducer
})

export default reducer;