import React from 'react'

export default function Textarea(props) {
	return (
		<label>
			{props.title}
			<textarea
				placeholder={props.title}
				name={props.name}
				value={props.value}
				rows='7'
				onChange={props.onChangeHandler}
			></textarea>
			<div className='error'>
				{props.error
					? <p>{props.error}</p>
					: 600 - props.value.length >= 0
						? <p className='count'>Осталось {600 - props.value.length} / 600 символов</p>
						: <p>Превышен лимит</p>
				}
			</div>
		</label>
	)
}
