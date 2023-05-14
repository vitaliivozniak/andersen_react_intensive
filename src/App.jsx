import React, { Component } from 'react';
import styles from './App.css'
import Form from './components/Form';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Создание анкеты</h1>
				<Form />
			</div>
		);
	}
}

export default App;
