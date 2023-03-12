import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import './app.css';
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends Component {
	maxId = 100;

	state = {
		tasks: [
			this.createTaskItem('Completed task'),
			this.createTaskItem('Editing task'),
			this.createTaskItem('Active task'),
		],
		filters: [
			this.createFilterItem('All', true),
			this.createFilterItem('Active'),
			this.createFilterItem('Completed'),
		]
	}

	createTaskItem(text) {
		return {
			status: 'active',
			description: text,
			created: formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true }),
			id: this.maxId++
		};
	};

	createFilterItem(text, select = false) {
		return {
			label: text,
			selected: select,
			id: this.maxId++
		};
	};

	changeStatus = (id) => {
		this.setState(({ tasks }) => {
			const newArray = [...tasks];
			const idx = tasks.findIndex((el) => el.id === id);
			const targetTask = newArray[idx];

			targetTask.status === 'active' ? targetTask.status = 'completed' : targetTask.status = 'active';

			return { tasks: newArray };
		});
	};

	deletItem = (id) => {
		this.setState(({ tasks }) => {
			const newArray = [...tasks];
			const idx = tasks.findIndex((el) => el.id === id);

			newArray.splice(idx, 1);

			return { tasks: newArray };
		});
	};

	addItem = (text) => {
		const newItem = this.createTaskItem(text);

		this.setState(({ tasks }) => {
			const newArray = [...tasks, newItem];

			return { tasks: newArray };
		});
	};

	filterItems = (id) => {
		this.setState(({ filters }) => {
			const newArray = [...filters];
			const idx = filters.findIndex((el) => el.id === id);

			newArray.map((item, index) => {
				if (index === idx) {
					return item.selected = true;
				}

				return item.selected = false;
			});

			return { filters: newArray };
		});

	};

	deleteComplited = () => {
		this.setState(({ tasks }) => {
			const newArray = tasks.filter(item => item.status !== 'completed');

			return { tasks: newArray }
		});
	}

	render() {
		const { tasks, filters } = this.state;
		const activeCount = tasks.filter(item => item.status === 'active').length;

		return (
			<section className="todoapp">
				<Header onItemAdded={this.addItem} />
				<section className="main">
					<TaskList
						tasks={tasks}
						filters={filters}
						onChanged={this.changeStatus}
						onDeleted={this.deletItem} />
					<Footer
						onFilterClick={this.filterItems}
						filters={filters}
						onComletedDeleted={this.deleteComplited}
						activeCount={activeCount} />
				</section>
			</section>
		);
	}
}