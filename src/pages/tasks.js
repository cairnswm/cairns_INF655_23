import TaskForm from "../components/TaskForm";
import { useEffect, useContext } from "react";
import { TaskContext } from "../context/taskContext";
import TaskLine from "../components/taskLine";
import FilterForm from "../components/filterform";

const Tasks = () => {
	const { taskList, addTask, checkTask, deleteTask } = useContext(TaskContext);

	useEffect(() => {
		console.log("Tasks", taskList);
	}, [taskList]);

	return (
		<div>
			<FilterForm />
			{taskList.map((item, idx) => {
				console.log("TASK", item);
				return <TaskLine key={idx} task={item} onCheck={checkTask} onDelete={deleteTask} />;
			})}
			<TaskForm addTask={addTask} />
		</div>
	);
};

export default Tasks;
