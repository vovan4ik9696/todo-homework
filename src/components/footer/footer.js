import React from "react";

import './footer.css';
import TasksFilter from "../tasks-filter";

const Footer = ({ filters, onFilterClick, onComletedDeleted, activeCount }) => {
	return (
		<footer className="footer">
			<span className="todo-count">{activeCount} items left</span>
			<TasksFilter
				onFilterClick={onFilterClick}
				filters={filters} />
			<button
				className="clear-completed"
				onClick={onComletedDeleted}>Clear completed</button>
		</footer>
	);
};

export default Footer;