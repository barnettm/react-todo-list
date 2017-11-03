import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, getAll} from '../actions';

const TodoItem = props => {
    const {index, item} = props;
    const handleClick = () => {
    console.log('Delete item at index: ', item._id);

    props.deleteTodo(item._id).then(() => {
        props.getAll();
    });
}

    return(
        <li className="collection-item row">
            <div className="col s10">
                {item.title} 
            </div>
            <div className="col s2">
                <button onClick={handleClick} className="btn red darken-3">Delete</button>
            </div>
        </li>
    )
}

export default connect(null, {deleteTodo, getAll})(TodoItem);