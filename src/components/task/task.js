import React from "react";

import './task.css';

const Task = ({ description, status, created, onChanged, onDeleted }) => {

	return (
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				onClick={onChanged}
				checked={status === 'completed'}
				readOnly />
			<label>
				<span className="description">{description}</span>
				<span className="created">created 17 seconds ago</span>
			</label>
			<button className="icon icon-edit"></button>
			<button
				className="icon icon-destroy"
				onClick={onDeleted}></button>
		</div>
	);
};

export default Task;