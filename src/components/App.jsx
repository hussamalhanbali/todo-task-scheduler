import { useState, useEffect } from 'react';
import Input from './input';
import List from './list';
import './App.css';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const uncompletedtodos = data.filter((todo) => !todo.complete).map((todo) => todo.title);
				setTodos(uncompletedtodos);
				setLoading(false);
			});
	}, []);

	const addTodo = () => {
		console.log(todos);
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};
	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncompletedTodos);
	};

	if (loading) {
		return <div>loading</div>;
	}
	return (
		<div className="App">
			<img className="logo" src="/logo-React.webp" alt="techover" />
			<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
			{loading ? <h1>loading</h1> : <List todos={todos} complete={complete} />}
			<List todos={todos} complete={complete} />
		</div>
	);
}

export default App;
