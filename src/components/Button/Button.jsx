import React, { Component } from 'react';
import styles from './Button.module.css';

// class Buttons extends Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	render() {
// 		return (
// 			<div className={styles.buttons}>
// 				<button type="button" name="reset">Отмена</button>
// 				<button type="submit" name="submit" onClick={this.props.getResult}>Сохранить</button>
// 			</div>
// 		)
// 	}
// }

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