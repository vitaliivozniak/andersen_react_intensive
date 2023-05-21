import React, { Component } from 'react';
import styles from './Input.module.css';



class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label>
				{this.props.title}
				<input
					type={this.props.type || "text"}
					name={this.props.name}
					value={this.props.value}
					placeholder={this.props.title}
					onChange={this.props.change}
				/>
				<div className='error'>{this.props.error}</div>
			</label>
		)
	}
}

export default Input;