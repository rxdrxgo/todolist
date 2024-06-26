import { Fragment } from "react";

const TodoItem = (props) => {
    return(
        <Fragment>
            <li className='list-group-item' key={todo.id}>{props.todo.tarea}</li>
        </Fragment>
    )
}

export default TodoItem;