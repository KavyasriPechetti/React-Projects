import React from "react";
import Todo from "./todo";
function Todolist() {
    const [todos,setTodos]=React.useState(["Go to mall","Buy chocolates","buy icecream","buy dil kush"]);
    console.log("Hello");

    function addTodo() {
        setTodos([...todos,document.getElementById("inp").value]);
    }

    function deleteTodo(ind) {
        var temp=[...todos];
        temp.splice(ind,1);
        setTodos([...temp]);
    }
    return (
        <div className="mybox">
            <h1>TodoList</h1>
            <input type="text" id="inp"/>
            <button onClick={()=>{addTodo()}}>Add</button>
            {
                todos.map((todo,i)=>{
                    return <Todo todo={todo} index={i} deleteTodo={deleteTodo}></Todo>
                        
                    
                })
            }
        </div>
    )
}
export default Todolist;