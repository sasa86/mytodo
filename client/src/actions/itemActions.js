import axios from "axios";
import * as types from "./types";

export const getItemsAction = (filter) => dispatch => {
    
    
    dispatch(setItemsLoading());
    axios.get('/todoItems', {params: {
        filter
    }})
    .then(res => { dispatch({
        type: types.GET_ITEMS,
        payload: res.data
        
    });
})
    // .then(res => dispatch({
    //     type: types.STATUS_FILTER_CHANGE,
    //     payload: res.data
    // }))
    
}
   // gets all todos and set filter
    


export const deleteItemAction = (id) => dispatch => {
   
    axios.delete(`/todoItems/${id}`)
    .then(res => dispatch({
        type: types.DELETE_ITEM,
        payload: id
    }))
// gets the id from onDeleteClick func. in TodoList components
}

export const addItemAction = (item) => dispatch => { 
    axios.post('/todoItems', item)
    .then(res => dispatch({
        type: types.ADD_ITEM,
        payload: res.data
    }))
}

export const toggleTodoAction = (id) => dispatch => {
    //console.log(id)
    axios.patch(`/todoItems/${id}`)

    .then(res => dispatch({
        type: types.TOGGLE_TODO,
        payload: id
    }))

}

export const updateItemAction = (id, name) => dispatch => {

   //console.log(id, name)
    axios.patch(`/todoItems/${id}`, { name: name })
    
    .then(res => dispatch({
        type: types.UPDATE_ITEM,
        payload: res.data 
    }))
}

export const allCompletedAction = () => dispatch => {
    
    axios.patch('/todoItems')
    .then(res => dispatch({
         type: types.ALL_COMPLETED
         
    }))
}

export const clearCompletedAction = () => dispatch => {
    
    axios.delete('/todoItems')
    .then( res => dispatch({
        type: types.CLEAR_COMPLETED
    }))
}

export function setItemsLoading() {
    return {
        type: types.ITEMS_LOADING
    }
}