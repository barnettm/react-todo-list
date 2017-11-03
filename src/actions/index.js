import axios from 'axios';
import types from './types';
import todoData from '../helpers/dummy_data';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c917lfztodo';

export function getAll(){
    const request = axios.get(BASE_URL+API_KEY);
    
    
    return {
        type: types.GET_ALL,
        payload: request
    }
}

export function addTodo(item){
    const request = axios.post(BASE_URL + API_KEY, item);

    return {
        type: types.ADD_TODO,
        payload: request
    }
}

export function deleteTodo(id){
    const request = axios.delete(`${BASE_URL}/${id + API_KEY}`)
    return {
        type: types.DELETE_TODO,
        payload: request
    }
}