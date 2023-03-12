import React from "react";
import PropTypes from 'prop-types';

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
				<span className="created">{created}</span>
			</label>
			<button className="icon icon-edit"></button>
			<button
				className="icon icon-destroy"
				onClick={onDeleted}></button>
		</div>
	);
};

Task.propTypes = {
	description: PropTypes.string,
	status: PropTypes.string,
	created: PropTypes.string,
	onChanged: PropTypes.func,
	onDeleted: PropTypes.func
};

export default Task;