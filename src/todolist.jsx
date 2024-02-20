import React from "react";
import Todo from "./todo";
function Todolist() {
    const [todos,setTodos]=React.useState(["Go to mall","Buy chocolates"]);
    console.log("Hello");

    function addTodo() {
        setTodos([...todos,document.getElementById("inp").value]);
    }
    return (
        <div className="mybox">
            <h1>TodoList</h1>
            <input type="text" id="inp"/>
            <button onClick={()=>{addTodo()}}>Add</button>
            {
                todos.map((todo)=>{
                    return <Todo todo={todo}></Todo>
                        
                    
                })
            }
        </div>
    )
}
export default Todolist;