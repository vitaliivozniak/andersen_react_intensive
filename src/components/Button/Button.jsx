import React from 'react';
import './Button.css';


export default function Button(props) {
	return (
		<button
			type={props.type || 'button'}
			name={props.name}
			onClick={props.onClickHandler}
		>
			{props.content}
		</button>
	)
}