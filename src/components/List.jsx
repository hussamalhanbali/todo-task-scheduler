import Item from './Item';
import './List.css';
const list = ({ todos, complete, loading }) => {
	if (loading) {
		return (
			<div className="list-todo">
				{[1, 2, 3, 4, 5].map((todo, i) => (
					<Item text={todo} key={i} complete={complete} loading={loading} />
				))}
			</div>
		);
	}

	if (todos.length === 0) {
		return <div className="empty">All tasks completed!</div>;
	}
	return (
		<div className="list-todo">
			{todos.map((todo, i) => (
				<Item text={todo} key={i} complete={complete} />
			))}
		</div>
	);
};

export default list;
