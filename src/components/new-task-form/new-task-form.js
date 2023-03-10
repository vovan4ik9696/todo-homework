import React, { Component } from "react";
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {
	state = {
		label: ''
	}

	static propTypes = {
		onItemAdded: PropTypes.func
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({ label: '' });
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input className="new-todo"
					type='text'
					placeholder="What needs to be done?"
					autoFocus
					onChange={this.onLabelChange}
					value={this.state.label} />
			</form>
		);
	};
};
