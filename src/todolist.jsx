import React from "react";
import Todo from "./todo";

function Todolist() {
    const [todos, setTodos] = React.useState([]);

    const [allCount, setAllCount] = React.useState(0);
    const [comCount, setComCount] = React.useState(0);
    const [pendCount, setPendCount] = React.useState(0);
    const [showCompleted,setShowCompleted]=React.useState(false);

    // console.log("Hello");

    function addTodo() {
        const newTodo = document.getElementById("inp").value;
        setTodos([...todos, { task: newTodo, stats: false }]);
        setAllCount(allCount + 1);
        setPendCount(pendCount + 1);

    }

    var deleteTodo = React.useCallback((ind) => {
        var temp = [...todos];
        const todoDelete = temp[ind];
        if (todoDelete.stats) {
            setComCount(comCount - 1);
        }
        else {
            setPendCount(pendCount - 1)
        }
        temp.splice(ind, 1);
        setTodos([...temp]);

        setAllCount(allCount - 1);
        // setPendCount(pendCount-1);

    }, [todos]);

    function doneTodo(ind) {
        const temp = [...todos];
        if (!temp[ind].stats) {
            setComCount(comCount + 1);
            setPendCount(pendCount - 1);

        }
        temp[ind].stats = true;
        setTodos([...temp]);


    }

    function undoTodo(ind) {
        const temp = [...todos];
        if (temp[ind].stats) {
            setPendCount(pendCount + 1);
            setComCount(comCount - 1);
        }
        temp[ind].stats = false;
        setTodos([...temp]);
    }

    function filterCompleted() {
        setShowCompleted(true);
    }

    function filterPending() {
        setShowCompleted(false);
    }

    return (
        <div>

      
        <div className="mybox">
            <div className="head">
                <div>
                    <h1 style={{ fontFamily: "arial" }}>List your Todos</h1>

                </div>

                <div className="btns" >
                    <button class="btn btn-info">All : <span>{allCount}</span></button>
                    <button class="btn btn-info" onClick={filterCompleted}>Completed : <span>{comCount}</span></button>
                    <button class="btn btn-info" onClick={filterPending}>Pending : <span>{pendCount}</span></button>
                </div>


            </div>
            <div className="input">
                <input type="text" id="inp" placeholder="Enter your task" />
                <button onClick={() => { addTodo() }}>Add</button>
            </div>


            {
                todos.map((todo, i) => {
                    
                        return <Todo todo={todo} index={i} deleteTodo={deleteTodo} doneTodo={doneTodo} undoTodo={undoTodo}></Todo>


                })
            }
        </div>
        </div>
    )
}
export default React.memo(Todolist);