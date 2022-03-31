import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

const FilterForm = () => {
	const { filter, setFilter } = useContext(TaskContext);

	return (
			<div className="row filterform">
				<span className="filter col-3">Filter: </span>
				<input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} />
			</div>
	);
};

export default FilterForm;
