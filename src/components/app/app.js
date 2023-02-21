import React from "react";

import './app.css';
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

const App = () => {
	const tasks = [
		{ status: 'completed', description: 'Completed task', created: new Date(), id: 1 },
		{ status: 'editing', description: 'Editing task', created: new Date(), id: 2 },
		{ status: '', description: 'Active task', created: new Date(), id: 3 },
	];

	return (
		<section className="todoapp">
			<Header />
			<section className="main">
				<TaskList tasks={tasks} />
				<Footer />
			</section>
		</section>
	);
};

export default App;