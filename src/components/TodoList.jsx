import {Fragment, useState, useRef} from 'react';
import TodoItem from './TodoItem';
import uuid4 from 'uuid4';

const TodoList = () => {
	const [todos, setTodos] = useState([

	]);


	const agregarTarea = () => {
		const tarea = tareaRef.current.value.trim();
		if(tarea.length == '') return;
		
		setTodos((prevTodos) => {
			const nuevaTarea = {
				id:uuid4(),
				tarea:tarea,
				estado:false
			}
			return [...prevTodos, nuevaTarea]
		})

		tareaRef.current.value = null;
	}

	const cambiarEstadoTarea = (id) => {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.estado = !todo.estado
		setTodos(newTodos)
	}


	const eliminarTarea = () => {
		const porhacer = todos.filter((todo) => !todo.estado);
		setTodos(porhacer)
	}




	const tareaRef = useRef();

	return (
		<Fragment>
			<h1 className="display-5 my-3">Lista de tareas ✔️😎</h1>
			<div className="input-group my-5">
				<input className="form-control" placeholder="Ingrese una tarea" ref={tareaRef}/>
				<button className="btn btn-primary ms-2" onClick={agregarTarea}><i className="bi bi-clipboard-plus"></i></button>
				<button className="btn btn-danger ms-2" onClick={eliminarTarea}><i className="bi bi-trash"></i></button>
				</div>
				
				<ul className="list-group mt-5">
					{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} cambiarEstado={cambiarEstadoTarea}/> 
					))}
				</ul>


		</Fragment>
	);
};

export default TodoList;
