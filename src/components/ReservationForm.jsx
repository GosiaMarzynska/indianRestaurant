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
	} = useInput(value => value.trim() !== '' && value);

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
		emailReset();
		phoneReset();
		dateReset();
		timeReset();
		extraReset();
	};

	const formIsValid = nameIsValid && emailIsValid && dateIsValid && phoneIsValid && timeIsValid;

	const submitHandler = event => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(`Name: ${nameInput}
             Email: ${emailInput}
             Phone: ${phoneInput}
             Date: ${dateInput}
             Time: ${timeInput}`);
		inputsReset();
	};

	const nameClasses = nameIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const emailClasses = emailIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const phoneClasses = phoneIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const dateClasses = dateIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const timeClasses = timeIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const extraClasses = classes['form-control'];

	return (
		<form onSubmit={submitHandler}>
			<div className={classes['control-group']}>
				<div className={nameClasses}>
					<label htmlFor='name'>Imię i Nazwisko</label>
					<input type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangeHandler} value={nameInput} />
					{nameIsInvalid && <p className={classes['error-text']}>Pole nie może być puste</p>}
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
					<label htmlFor='extra'>Informacje dodatkowe</label>
					<textarea
						type='textarea'
						id='extra'
						onChange={extraChangeHandler}
						value={extraInput}
						onBlur={extraBlurHandler}
					/>
				</div>
			</div>

			<div className={classes['form-actions']}>
				<Button text='Prześlij' disabled={!formIsValid}/>
			</div>
		</form>
	);
}
