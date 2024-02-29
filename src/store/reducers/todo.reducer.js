const initialState={
    alltodos:[
        {
            title:"learn react",
            status:false
        },
        {
            title:"learn redux",
            status:true
        },
        {
            title:"practice react",
            status:false
        }
    ],
    filteredTodos:[]

   
}

const todoReducer=function(state=initialState,action) {
    state.filteredTodos=[...state.alltodos]
   
    if(action.type==="ADDTODO") {
        var alltodos=[...state.alltodos,{title:action.payload,status:false}]
       return {...state,alltodos,filteredTodos:[...alltodos]}
    }
    if(action.type==="DELETETODO") {
        return {...state,alltodos:[...state.alltodos.filter((t,i)=>i!==action.payload
            
        )]}
    }
    if(action.type==="ALL") {
        return {...state,filteredTodos:[...state.alltodos]}
    }

    if(action.type==="DONE") {
        return {...state,filteredTodos:[...state.alltodos.filter(todo=>todo.status)]}
    }
    if(action.type==="NOTDONE") {
        return {...state,filteredTodos:[...state.alltodos.filter(todo=>!todo.status)]}
    }

    if(action.type==="DONETODO") {
        let temp=[...state.alltodos];
        temp[action.payload].status=true;
        return {...state,alltodos:[...temp]}
    }
    
    return state;
}

export default todoReducer;