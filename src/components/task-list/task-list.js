import React from "react";

import './task-list.css';
import Task from "../task";

const TaskList = ({ tasks }) => {
	const elements = tasks.map(item => {
		const { id, status, ...itemProps } = item;

		if (status === 'editing') {
			return (
				<li key={id} className={status}>
					<Task {...itemProps} />
					<input type="text" class="edit" value="Editing task" />
				</li>
			);
		}

		return (
			<li key={id} className={status}>
				<Task {...itemProps} />
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