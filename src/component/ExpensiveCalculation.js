import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	// poor performing function which renders million of data and cause Performance issues
	// when changing count and todo, you'll notice a DELAY in Execution
	// const calculation = expensiveCalculation(count);

	// useMemo() will help to memoize the expensive function
	// only cause the function to run as needed
	// The useMemoHook accepts a second parameter to declare dependencies
	// the function with useMemo() only run when its dependencies have changed
	const calculation = useMemo(() => expensiveCalculation(count), [count]);

	const increment = () => {
		setCount(count + 1);
	};

	const addTodo = () => {
		setTodos((t) => [...t, 'New Todo']);
	};

	return (
		<div>
			<div>
				<h2>My Todos</h2>
				{todos.map((todo, index) => {
					return <p key={index}>{todo}</p>;
				})}
				<button onClick={addTodo}>Add Todo</button>
			</div>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</div>
	);
}

const expensiveCalculation = (num) => {
	console.log('Calculating...');
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}
	return num;
};

export default ExpensiveCalculation;
