import React from "react";
import PropTypes from 'prop-types';

import './task-list.css';
import Task from "../task";

const TaskList = ({ tasks, filters, onChanged, onDeleted }) => {
	const { selected } = filters;

	const filterSelected = () => {
		let selected = {};

		filters.forEach(filter => {
			if (filter.selected) {
				selected = filter;
			}
		});

		return selected;
	};

	const elements = tasks.map(item => {
		const { id, ...itemProps } = item;

		if (filterSelected().label === 'All' || filterSelected().label.toLowerCase() === itemProps.status) {
			return (
				<li key={id} className={itemProps.status}>

					<Task
						{...itemProps}
						onChanged={() => onChanged(id)}
						onDeleted={() => onDeleted(id)} />

					<input type="text" className="edit"
						value="Editing task"
						readOnly />
				</li>
			);
		}
	});

	return (
		<ul className="todo-list">
			{elements}
		</ul>
	);
};

Task.propTypes = {
	onChanged: PropTypes.func,
	onDeleted: PropTypes.func
}

export default TaskList;