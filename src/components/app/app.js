import React, { Component } from "react";

import './app.css';
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends Component {

	state = {
		tasks: [
			{ status: 'completed', description: 'Completed task', created: new Date(), id: 1 },
			{ status: 'editing', description: 'Editing task', created: new Date(), id: 2 },
			{ status: 'active', description: 'Active task', created: new Date(), id: 3 },
		]
	}

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

	render() {
		const { tasks } = this.state;

		return (
			<section className="todoapp">
				<Header />
				<section className="main">
					<TaskList
						tasks={tasks}
						onChanged={this.changeStatus}
						onDeleted={this.deletItem} />
					<Footer />
				</section>
			</section>
		);
	}
}