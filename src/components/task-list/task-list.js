import React from "react";

import './task-list.css';
import Task from "../task";

const TaskList = ({ tasks, onChanged, onDeleted }) => {
	const elements = tasks.map(item => {
		const { id, status, ...itemProps } = item;

		return (
			<li key={id} className={status}>
				<Task
					{...itemProps}
					onChanged={() => onChanged(id)}
					onDeleted={() => onDeleted(id)} />
				<input type="text" className="edit"
					value="Editing task"
					readOnly />
			</li>
		);
	});

	return (
		<ul className="todo-list">
			{elements}
		</ul>
	);
};

export default TaskList;