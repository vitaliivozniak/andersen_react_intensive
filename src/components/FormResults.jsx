import React, { Component } from 'react';
import styles from './FormResults.module.css';

export default class FormResults extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>{this.props.data.name} {this.props.data.lastName}</h2>
				<ul className={styles.data_list}>
					<li>
						<span className={styles.data_list_title}>Дата рождения:</span>
						<p>{this.props.data.birthday}</p>
					</li>
					<li>
						<span className={styles.data_list_title}>Телефон:</span>
						<p>{this.props.data.phoneNumber}</p>
					</li>
					<li>
						<span className={styles.data_list_title}>Сайт: </span>
						<p>{this.props.data.site}</p>
					</li>
					<li>
						<span className={styles.data_list_title}>О себе: </span>
						<p>{this.props.data.personalInfo}</p>
					</li>
					<li>
						<span className={styles.data_list_title}>Стек технологий: </span>
						<p>{this.props.data.technologyStack}</p>
					</li>
					<li>
						<span className={styles.data_list_title}>Описание последнего проекта:</span>
						<p>{this.props.data.lastProjectDesc}</p>
					</li>
				</ul>
			</div>
		)
	}
}