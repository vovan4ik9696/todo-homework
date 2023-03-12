import React, { Component } from "react";

import './tasks-filter-item.css';

export default class TaskFilterItem extends Component {
	render() {
		const { label, selected, onFilterClick } = this.props;

		return (
			<button onClick={onFilterClick} className={selected ? 'selected' : ''}>{label}</button>
		);
	};
};