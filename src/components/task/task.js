import React from "react";

import './task.css';

const Task = ({ description, created }) => {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" />
			<label>
				<span className="description">{description}</span>
				<span className="created">created 17 seconds ago</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy"></button>
		</div>
	);
};

export default Task;