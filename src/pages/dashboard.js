import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/taskContext";

const Dashboard = () => {
	const { taskList } = useContext(TaskContext);

	const [count, setCount] = useState(0);
	const [checked, setChecked] = useState(0);

	useEffect(() => {
		setCount(taskList.length);
		setChecked(taskList.filter((item) => item.checked).length);
	}, [taskList]);

	return (
		<div>
			<h1>Dashboard</h1>
			Total Tasks: {count}
			<br />
			Checked Tasks: {checked}
			<p>
				This dashboard is live, as you add, delete and check tasks the figures will update. It would also be
				nice to see these in a graph format in the future.
			</p>
		</div>
	);
};

export default Dashboard;
