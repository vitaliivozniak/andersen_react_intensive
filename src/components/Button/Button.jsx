import React, { Component } from 'react';
import styles from './Button.module.css';


class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				type={this.props.type}
				name={this.props.name}
				onClick={this.props.clickHandler}
			>
				{this.props.content}
			</button>
		)
	}
}

export default Button;