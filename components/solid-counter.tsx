import { createSignal } from 'solid-js';

const Counter = () => {
	// createSignal is a SolidJS hook that creates a reactive state
	const [count, setCount] = createSignal(0);
	// Function to increment the count
	const increment = () => {
		setCount(count() + 1);
	};

	return (
		<div>
			<h2>SolidJs Counter: {count()}</h2>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default Counter;
