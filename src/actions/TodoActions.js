export const AddTodoAction =(todo)=>(dispatch, getState)=>{  // reduc thunk allows us to create nested arrow functions and pass different parameters.
    // Here its taking the "todo" form our applicaton and will add this to our state.
    const{
        Todo: {todos},
    } = getState();

    const hasTodo = todos.find(i=>i.todo===todo);   // here we are cheching the uniqueness of the todo entries
    if(!hasTodo && todo !==""){
        dispatch({
            type: "ADD_TODO",
            payload: [{id: todo, todo},...todos],
        });
    }
}

export const RemoveTodoActions=(todo)=>(dispatch, getState)=>{
    const {
        Todo:{todos},
    }= getState();

    dispatch({
        type:"REMOVE_TODO",
        payload: todos.filter(t => t.id !==todo.id),
    })
}