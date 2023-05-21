import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import FormResults from './FormResults';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';
import './Form.css';
import ERRORS from './Errors';


export default function Form() {

	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [site, setSite] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');
	const [technologyStack, setTechnologyStack] = useState('');
	const [lastProjectDesc, setLastProjectDesc] = useState('');

	const [nameError, setNameError] = useState('');
	const [lastNameError, setLastNameError] = useState('');
	const [birtdayError, setBirtdayError] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');
	const [siteError, setSiteError] = useState('');
	const [personalInfoError, setPersonalInfoError] = useState('');
	const [technologyStackError, setTechnologyStackError] = useState('');
	const [lastProjectDescError, setLastProjectDescError] = useState('');

	const [submitted, setSubmitted] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);

	function isValid() {
		let nameErrorText = '';
		let lastNameErrorText = '';
		let birthdayErrorText = '';
		let phoneNumberErrorText = '';
		let siteErrorText = '';
		let personalInfoErrorText = '';
		let technologyStackErrorText = '';
		let lastProjectDescErrorText = '';


		if (!name) {
			nameErrorText = ERRORS.emptyField;
		} else if (name[0] !== name[0].toUpperCase()) {
			nameErrorText = ERRORS.capitalLetter
		}

		if (!lastName) {
			lastNameErrorText = ERRORS.emptyField;
		} else if (name[0] !== name[0].toUpperCase()) {
			lastNameErrorText = ERRORS.capitalLetter
		}

		if (!birthday) {
			birthdayErrorText = ERRORS.emptyField;
		}

		if (!phoneNumber) {
			phoneNumberErrorText = ERRORS.emptyField;
		}

		const siteReg = /^https:\/\//;
		if (!site) {
			siteErrorText = ERRORS.emptyField;
		} else if (siteReg.test(site) === false) {
			siteErrorText = ERRORS.site;
		}

		if (!personalInfo) {
			personalInfoErrorText = ERRORS.emptyField;
		} else if (600 - personalInfo.length < 0) {
			personalInfoErrorText = ERRORS.fieldLimit
		}

		if (!technologyStack) {
			technologyStackErrorText = ERRORS.emptyField;
		} else if (600 - technologyStack.length < 0) {
			technologyStackErrorText = ERRORS.fieldLimit
		}

		if (!lastProjectDesc) {
			lastProjectDescErrorText = ERRORS.emptyField;
		} else if (600 - lastProjectDesc.length < 0) {
			lastProjectDescErrorText = ERRORS.fieldLimit
		}

		if (nameErrorText || lastNameErrorText || birthdayErrorText || phoneNumberErrorText || siteErrorText || personalInfoErrorText || technologyStackErrorText || lastProjectDescErrorText) {
			setNameError(nameErrorText);
			setLastNameError(lastNameErrorText);
			setBirtdayError(birthdayErrorText);
			setPhoneNumberError(phoneNumberErrorText);
			setSiteError(siteErrorText);
			setPersonalInfoError(personalInfoErrorText);
			setTechnologyStackError(technologyStackErrorText);
			setLastProjectDescError(lastProjectDescErrorText)

			return false;
		} else {
			setNameError('');
			setLastNameError('');
			setBirtdayError('');
			setPhoneNumberError('');
			setSiteError('');
			setPersonalInfoError('');
			setTechnologyStackError('');
			setLastProjectDescError('');

			return true;
		}
	}

	function formSubmitHandler(event) {
		event.preventDefault()
		setName(name.trim());
		setLastName(lastName.trim());
		setBirthday(birthday.trim());
		setPhoneNumber(phoneNumber.trim());
		setSite(site.trim());
		setPersonalInfo(personalInfo.trim());
		setTechnologyStack(technologyStack.trim());
		setLastProjectDesc(lastProjectDesc.trim());
		setSubmitted(true);
	}

	useEffect(() => {
		if (submitted) {
			if (isValid()) {
				setIsFormValid(true);
			}
		}
		setSubmitted(false);
	});

	function formReset(event) {
		event.preventDefault();
		setName('');
		setLastName('');
		setBirthday('');
		setPhoneNumber('');
		setSite('');
		setPersonalInfo('');
		setTechnologyStack('');
		setLastProjectDesc('');

		setNameError('');
		setLastNameError('');
		setBirtdayError('');
		setPhoneNumberError('');
		setSiteError('');
		setPersonalInfoError('');
		setTechnologyStackError('');
		setLastProjectDescError('');

		setIsFormValid(false);
	}

	function phoneNumberMask(event) {
		setPhoneNumber(
			event.target.value
				.replace(/\D/g, "")
				.match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)
				.slice(1, 5)
				.filter((item) => item !== "")
				.join("-")
		);
	}

	if (!isFormValid) {
		return (
			<form onSubmit={formSubmitHandler}>
				<Input
					title='Имя'
					name='name'
					value={name}
					onChangeHandler={(event) => setName(event.target.value)}
					error={nameError}
				/>
				<Input
					title='Фамилия'
					name='lastName'
					value={lastName}
					onChangeHandler={(event) => setLastName(event.target.value)}
					error={lastNameError}
				/>
				<Input
					title='Дата рождения'
					type='date'
					name='birthday'
					value={birthday}
					onChangeHandler={(event) => setBirthday(event.target.value)}
					error={birtdayError}
				/>
				<Input
					title='Телефон'
					name='phoneNumber'
					value={phoneNumber}
					onChangeHandler={phoneNumberMask}
					error={phoneNumberError}
				/>
				<Input
					title='Сайт'
					name='site'
					value={site}
					onChangeHandler={(event) => setSite(event.target.value)}
					error={siteError}
				/>
				<Textarea
					title='О себе'
					name='personalInfo'
					value={personalInfo}
					onChangeHandler={(event) => setPersonalInfo(event.target.value)}
					error={personalInfoError}
				/>
				<Textarea
					title='Стек технологий'
					name='technologyStack'
					value={technologyStack}
					onChangeHandler={(event) => setTechnologyStack(event.target.value)}
					error={technologyStackError}
				/>
				<Textarea
					title='Описание последнего проекта'
					name='lastProjectDesc'
					value={lastProjectDesc}
					onChangeHandler={(event) => setLastProjectDesc(event.target.value)}
					error={lastProjectDescError}
				/>
				<div className="buttons">
					<Button
						type='submit'
						name='submit'
						content='Сохранить'
					/>
					<Button
						type='reset'
						name='reset'
						content='Отмена'
						onClickHandler={formReset}
					/>
				</div>
			</form>
		)
	} else {
		return (
			<div>
				<FormResults
					name={name}
					lastName={lastName}
					birthday={birthday}
					phoneNumber={phoneNumber}
					site={site}
					personalInfo={personalInfo}
					technologyStack={technologyStack}
					lastProjectDesc={lastProjectDesc}
				/>
				<div className="buttons">
					<Button
						type='reset'
						name='reset'
						content='Отмена'
						onClickHandler={formReset}
					/>
				</div>
			</div>
		)
	}
}