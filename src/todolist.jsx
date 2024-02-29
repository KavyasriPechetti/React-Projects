import React from "react";
import Todo from "./todo";

function Todolist() {
    const [todos, setTodos] = React.useState([]);

    const [allCount, setAllCount] = React.useState(0);
    const [comCount, setComCount] = React.useState(0);
    const [pendCount, setPendCount] = React.useState(0);
    const [showCompleted,setShowCompleted]=React.useState(false);
    const [showPending,setShowPending]=React.useState(true);


    // console.log("Hello");

    function addTodo() {
        const newTodo = document.getElementById("inp").value;
        setTodos([...todos, { task: newTodo, stats: false }]);
        setAllCount(allCount + 1);
        setPendCount(pendCount + 1);
        document.getElementById("inp").value="";

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

    }, [todos,allCount,comCount,pendCount]);

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
        setShowPending(false);
    }

    function filterAll() {
        setShowCompleted(false);
    }

    return (
     

      
        <div className="mybox">
            <div className="head">
                <div>
                    <h1 style={{ fontFamily: "arial" }}>List your Todos</h1>

                </div>

                <div className="btns" >
                    <button class="btn btn-info" onClick={filterAll}>All : <span>{allCount}</span></button>
                    <button class="btn btn-info" onClick={filterCompleted}>Completed : <span>{comCount}</span></button>
                    <button class="btn btn-info" onClick={filterPending}>Pending : <span>{pendCount}</span></button>
                </div>


            </div>
            <div className="input">
                <input type="text" id="inp" placeholder="Enter your task" />
                <button onClick={() => { addTodo() }}>Add</button>
            </div>

                <div>
                {
               todos.map((todo, i) => {
                if (!showCompleted || (showCompleted && todo.stats)) {
                    return <Todo key={i} todo={todo} index={i} deleteTodo={deleteTodo} doneTodo={doneTodo} undoTodo={undoTodo} />
                } else if(!showPending || (showPending && todo.stats)) {
                    return <Todo key={i} todo={todo} index={i} deleteTodo={deleteTodo} doneTodo={doneTodo} undoTodo={undoTodo} />
                }
                return null;
            })
            }
                 </div>
            
        </div>

    )
}
export default React.memo(Todolist);