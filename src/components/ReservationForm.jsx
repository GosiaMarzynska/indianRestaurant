import Button from '../components/UI/Button';
import useInput from '../hooks/useInput';
import classes from './ReservationForm.module.css';

export default function ReservaionForm() {
	const {
		value: nameInput,
		isValid: nameIsValid,
		hasError: nameIsInvalid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: lastNameInput,
		isValid: lastNameIsValid,
		hasError: lastNameIsInvalid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: emailInput,
		isValid: emailIsValid,
		hasError: emailIsInvalid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(value => value.includes('@') && value.includes('.'));

	const {
		value: phoneInput,
		isValid: phoneIsValid,
		hasError: phoneIsInvalid,
		valueChangeHandler: phoneChangeHandler,
		inputBlurHandler: phoneBlurHandler,
		reset: phoneReset,
	} = useInput(value => value.trim().length === 9);

	const {
		value: dateInput,
		isValid: dateIsValid,
		hasError: dateIsInvalid,
		valueChangeHandler: dateChangeHandler,
		inputBlurHandler: dateBlurHandler,
		reset: dateReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: timeInput,
		isValid: timeIsValid,
		hasError: timeIsInvalid,
		valueChangeHandler: timeChangeHandler,
		inputBlurHandler: timeBlurHandler,
		reset: timeReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: extraInput,
		valueChangeHandler: extraChangeHandler,
		inputBlurHandler: extraBlurHandler,
		reset: extraReset,
	} = useInput(value => value.trim() !== '');

	const inputsReset = () => {
		nameReset();
		lastNameReset();
		emailReset();
		phoneReset();
		dateReset();
		timeReset();
		extraReset();
	};

	const formIsValid = nameIsValid && lastNameIsValid && emailIsValid && dateIsValid && phoneIsValid && timeIsValid;

	const submitHandler = event => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(`Name: ${nameInput}
             Last Name: ${lastNameInput}
             Email: ${emailInput}
             Phone: ${phoneInput}
             Date: ${dateInput}
             Time: ${timeInput}`);
		inputsReset();
	};

	const nameClasses = nameIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const lastNameClasses = lastNameIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const emailClasses = emailIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const phoneClasses = phoneIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const dateClasses = dateIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const timeClasses = timeIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const extraClasses = classes['form-control'];

	return (
		<form onSubmit={submitHandler}>
			<div className={classes['control-group']}>
				<div className={nameClasses}>
					<label htmlFor='name'>Imię</label>
					<input type='text' id='firstName' onBlur={nameBlurHandler} onChange={nameChangeHandler} value={nameInput} />
					{nameIsInvalid && <p className={classes['error-text']}>Imię nie moze być puste</p>}
				</div>

				<div className={lastNameClasses}>
					<label htmlFor='lastName'>Nazwisko</label>
					<input
						type='text'
						id='lastName'
						onBlur={lastNameBlurHandler}
						onChange={lastNameChangeHandler}
						value={lastNameInput}
					/>
					{lastNameIsInvalid && <p className={classes['error-text']}>Nazwisko nie może być puste</p>}
				</div>

				<div className={emailClasses}>
					<label htmlFor='email'>E-Mail</label>
					<input type='email' id='email' onBlur={emailBlurHandler} onChange={emailChangeHandler} value={emailInput} />
					{emailIsInvalid && <p className={classes['error-text']}>Email musi zawierać "@" and "."</p>}
				</div>

				<div className={phoneClasses}>
					<label htmlFor='phone'>Telefon</label>
					<input
						type='tel'
						id='phone'
						onBlur={phoneBlurHandler}
						onChange={phoneChangeHandler}
						value={phoneInput}
						pattern='[0-9]{9}'
					/>
					{phoneIsInvalid && <p className={classes['error-text']}>Telefon musi zawierać 9 cyfr</p>}
				</div>

				<div className={dateClasses}>
					<label htmlFor='date'>Data</label>
					<input type='date' id='date' onBlur={dateBlurHandler} onChange={dateChangeHandler} value={dateInput} />
					{dateIsInvalid && <p className={classes['error-text']}>Data jest niepoprawna</p>}
				</div>

				<div className={timeClasses}>
					<label htmlFor='time'>Godzina</label>
					<input
						type='time'
						id='time'
						onBlur={timeBlurHandler}
						onChange={timeChangeHandler}
						value={timeInput}
						min='11:00'
						max='20:00'
					/>
					{timeIsInvalid && (
						<p className={classes['error-text']}>Możliwość rezerwacji stolika między godziną 11:00 a 20:00</p>
					)}
				</div>

				<div className={extraClasses}>
					<label htmlFor='time'>Informacje dodatkowe</label>
					<textarea
						type='textarea'
						id='extra'
						onChange={extraChangeHandler}
						value={extraInput}
						onBlur={extraBlurHandler}
						min='11:00'
						max='20:00'
					/>
				</div>
			</div>

			<div className='form-actions'>
				<Button text='Prześlij' />
			</div>
		</form>
	);
}
