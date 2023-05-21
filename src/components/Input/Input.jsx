import React from 'react';
import './Input.css';

export default function Input(props) {
	return (
		<label>
			{props.title}
			<input
				type={props.type || 'text'}
				placeholder={props.title}
				name={props.name}
				value={props.value}
				onChange={props.onChangeHandler}
			/>
			<div className='error'>{props.error}</div>
		</label>
	)
}