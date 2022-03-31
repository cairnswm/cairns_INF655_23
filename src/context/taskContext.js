import { useState, createContext, useEffect } from "react";
import Data from "./data";
import { saveTasks, loadTasks } from "../components/TaskData"

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([]);
	const [task, setTask] = useState({});
	const [lastId, setLastId] = useState(11);
	const [tasks, setTasks] = useState(Data);
	const [filter, setFilter] = useState("");

	const getNextId = () => {
		let nextId = lastId + 1;
		setLastId(nextId);
		return nextId;
	};

	useEffect(() => {
		let loadTaskList = loadTasks();
		if (loadTaskList && loadTaskList.length > 0) {
			console.log("Loading tasks",loadTaskList)
			let maxid = 0;
			loadTaskList.forEach(element => {
				if (parseInt(element.id) > maxid) {
					maxid = parseInt(element.id);
				}
				setLastId(maxid);
			});
			setTasks(loadTaskList)
		}
	},[])

	useEffect(() => {
		const filterString = filter.toUpperCase();
		setTaskList(tasks.filter(item => item.title.toUpperCase().includes(filterString) || item.description.toUpperCase().includes(filterString)))
	},[tasks, filter])

	useEffect(() => {
		saveTasks(tasks);
	},[tasks])

	const addTask = (name, desc) => {
		if (name && desc) {
			setTasks([...tasks, { id: `${getNextId()}`, title: name, description: desc, checked: false }]);
		}
	};

    const checkTask = (event, task) => {
        setTasks(tasks.map(item => {
            if (item.id === task.id) {
                item.checked = !item.checked;
                return item;
            } else {
                return item;
            }
        }))
    }

	const deleteTask = (event, task) => {
		let newTasks = tasks.filter(item => item.id !== task.id)
		setTaskList(newTasks);
	}

	return (
		<TaskContext.Provider
			value={{
				taskList,
				setTaskList,
				task,
				setTask,
				addTask,
				getNextId,
                checkTask,
				deleteTask, 
				filter, setFilter
			}}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
