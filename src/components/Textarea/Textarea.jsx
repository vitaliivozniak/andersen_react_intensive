import React, { Component } from 'react';
import styles from './Textarea.module.css';


class Textarea extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label>
				{this.props.title}
				{/* {this.props.title} - {this.props.error} */}
				<textarea
					placeholder={this.props.title}
					name={this.props.name}
					value={this.props.value}
					rows="7"
					onChange={this.props.change}
				>
				</textarea>
				<div className='error'>
					{this.props.error
						? <p>{this.props.error}</p>
						: 600 - this.props.value.length >= 0
							? <p className='count'>Осталось {600 - this.props.value.length} / 600 символов</p>
							: <p>Превышен лимит</p>
					}
				</div>
			</label>
		)
	}
}

export default Textarea;
