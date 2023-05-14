import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';
import styles from './Form.module.css';


class Form extends Component {
	constructor(props) {
		super(props)
	}

	formFieldsHandler = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	}
	render() {

		return (
			<form className={styles.form}>
				<Input title='Имя' name='name' changeInputValue={this.formFieldsHandler} />
				<Input title='Фамилия' name='last name' changeInputValue={this.formFieldsHandler} />
				<Input title='Дата рождения' name='birthday' changeInputValue={this.formFieldsHandler} />
				<Input title='Телефон' name='contact number' changeInputValue={this.formFieldsHandler} />
				<Input title='Сайт' name='site' changeInputValue={this.formFieldsHandler} />
				<Textarea title='О себе' name='personal info' changeInputValue={this.formFieldsHandler} />
				<Textarea title='Стек технологий' name='technology stack' changeInputValue={this.formFieldsHandler} />
				<Textarea title='Описание последнего проекта' name='last project descr' changeInputValue={this.formFieldsHandler} />
				<Buttons getResult={this.onSubmit} />
			</form>
		)
	}
}

export default Form;