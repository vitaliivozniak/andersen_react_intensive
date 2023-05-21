import React from 'react';
import './FormResults.css';

export default function FormResults(props) {


	return (
		<div className='cont'>
			<h2>{props.name} {props.lastName}</h2>
			<ul className='data-list'>
				<li>
					<span className='data-list-title'>Дата рождения:</span>
					<p>{props.birthday}</p>
				</li>
				<li>
					<span className='data-list-title'>Телефон:</span>
					<p>{props.phoneNumber}</p>
				</li>
				<li>
					<span className='data-list-title'>Сайт:</span>
					<p>{props.site}</p>
				</li>
				<li>
					<span className='data-list-title'>О себе:</span>
					<p>{props.personalInfo}</p>
				</li>
				<li>
					<span className='data-list-title'>Стек технологий:</span>
					<p>{props.technologyStack}</p>
				</li>
				<li>
					<span className='data-list-title'>Описание последнего проекта:</span>
					<p>{props.lastProjectDesc}</p>
				</li>
			</ul>
		</div>
	)
}