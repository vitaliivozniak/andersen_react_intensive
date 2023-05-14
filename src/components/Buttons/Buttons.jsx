import React, { Component } from 'react';
import styles from './Buttons.module.css';

class Buttons extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={styles.buttons}>
				<button type="button" name="reset">Отмена</button>
				<button type="submit" name="submit" onClick={this.props.getResult}>Сохранить</button>
			</div>
		)
	}
}

export default Buttons;