import TaskProvider from "./context/taskContext";
import Header from "./components/header";
import { BrowserRouter, Link } from "react-router-dom";
import Menu from "./components/menu"

function App() {
	return (
		<TaskProvider>
			<BrowserRouter>
				<div>
					<Header />
					<Menu />
				</div>
			</BrowserRouter>
		</TaskProvider>
	);
}

export default App;

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to='/'>Go to the home page</Link>
			</p>
		</div>
	);
}
