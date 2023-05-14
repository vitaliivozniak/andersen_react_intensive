import React, { Component } from 'react';
import styles from './Textarea.module.css';


class Textarea extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<label>
				{this.props.title}
				<textarea type="text" name={this.props.name} placeholder={this.props.title} rows="7" onChange={this.props.changeInputValue} />
			</label>
		)
	}
}

export default Textarea;