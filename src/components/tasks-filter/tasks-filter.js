import React, { Component } from "react";
import PropTypes from 'prop-types';

import TaskFilterItem from "../tasks-filter-item";
import './tasks-filter.css';

export default class TasksFilter extends Component {

	static propTypes = {
		onFilterClick: PropTypes.func
	};

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