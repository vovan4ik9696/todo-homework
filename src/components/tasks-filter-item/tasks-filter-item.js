import React from "react";
import PropTypes from 'prop-types';

import './tasks-filter-item.css';

const TaskFilterItem = ({ label, selected, onFilterClick }) => {
	return <button onClick={onFilterClick} className={selected ? 'selected' : ''}>{label}</button>;
};

TaskFilterItem.propTypes = {
	label: PropTypes.string,
	selected: PropTypes.bool,
	onFilterClick: PropTypes.func
}

export default TaskFilterItem;