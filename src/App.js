import logo from './logo.svg';
import './App.css';
import ExpensiveCalculation from './component/ExpensiveCalculation';

function App() {
	return (
		<div className="App">
			<h1>useMemo() use cases and examples</h1>
			<br />
			<ExpensiveCalculation />
		</div>
	);
}

export default App;
