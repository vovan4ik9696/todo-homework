import React, { Component } from "react";

import TaskFilterItem from "../tasks-filter-item";
import './tasks-filter.css';

export default class TasksFilter extends Component {
	render() {
		const { filters, onFilterClick } = this.props;
		const elements = filters.map(item => {
			const { id, ...itemProps } = item;

			return (
				<li key={id}>
					<TaskFilterItem
						onFilterClick={() => onFilterClick(id)}
						{...itemProps} />
				</li>
			);
		});

		return (
			<ul className="filters">
				{elements}
			</ul>
		);
	}
};