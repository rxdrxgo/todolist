import {Fragment, useState} from 'react';
const TodoList = () => {
	return (
		<Fragment>
			<h1 className="display-5 my-3">Lista de tareas ✔️😎</h1>

			<div className="input-group my-5">
				<input className="form-control" placeholder="Ingrese una tarea" />
				<button className="btn btn-primary ms-2"><i className="bi bi-clipboard-plus"></i></button>
				<button className="btn btn-danger ms-2"><i className="bi bi-trash"></i></button>
			</div>
			<ul className='list-group mt-5'>
				{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</Fragment>
	);
};

export default TodoList;
