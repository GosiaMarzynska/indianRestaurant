import Button from '../UI/Button';
import useInput from '../../hooks/useInput';
import classes from './Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Checkout(props) {
	const navigate = useNavigate();

	const {
		value: nameInput,
		isValid: nameIsValid,
		hasError: nameIsInvalid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: adressInput,
		isValid: adressIsValid,
		hasError: adressIsInvalid,
		valueChangeHandler: adressChangeHandler,
		inputBlurHandler: adressBlurHandler,
		reset: adressReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: postalInput,
		isValid: postalIsValid,
		hasError: postalIsInvalid,
		valueChangeHandler: postalChangeHandler,
		inputBlurHandler: postalBlurHandler,
		reset: postalReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: cityInput,
		isValid: cityIsValid,
		hasError: cityIsInvalid,
		valueChangeHandler: cityChangeHandler,
		inputBlurHandler: cityBlurHandler,
		reset: cityReset,
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
		value: extraInput,
		valueChangeHandler: extraChangeHandler,
		inputBlurHandler: extraBlurHandler,
		reset: extraReset,
	} = useInput(value => value.trim() !== '');

	const inputsReset = () => {
		nameReset();
		adressReset();
		postalReset();
		cityReset();
		emailReset();
		phoneReset();
		extraReset();
	};

	const formIsValid = nameIsValid && adressIsValid && postalIsValid && cityIsValid && phoneIsValid && emailIsValid;

	const confirmHandler = event => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name: nameInput,
			adress: adressInput,
			postal: postalInput,
			city: cityInput,
			email: emailInput,
			phone: phoneInput,
		});

		inputsReset();
		// navigate('/menu#menu');
	};

	const nameClasses = nameIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const adressClasses = adressIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const postalClasses = postalIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const cityClasses = cityIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const emailClasses = emailIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const phoneClasses = phoneIsInvalid ? `${classes['form-control']} ${classes.invalid}` : classes['form-control'];
	const extraClasses = classes['form-control'];

	return (
		<>
			<h2 className={classes.title}>DANE OSOBOWE:</h2>
			<form onSubmit={confirmHandler}>
				<div className={classes['control-group']}>
					<div className={nameClasses}>
						<label htmlFor='name'>Imię i Nazwisko</label>
						<input type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangeHandler} value={nameInput} />
						{nameIsInvalid && <p className={classes['error-text']}>Pole nie może być puste</p>}
					</div>

					<div className={adressClasses}>
						<label htmlFor='adress'>Adres</label>
						<input
							type='text'
							id='adress'
							onBlur={adressBlurHandler}
							onChange={adressChangeHandler}
							value={adressInput}
						/>
						{adressIsInvalid && <p className={classes['error-text']}>Pole nie może być puste</p>}
					</div>

					<div className={postalClasses}>
						<label htmlFor='postal'>Kod pocztowy</label>
						<input
							type='text'
							id='postal'
							onBlur={postalBlurHandler}
							onChange={postalChangeHandler}
							value={postalInput}
						/>
						{postalIsInvalid && <p className={classes['error-text']}>Pole nie może być puste</p>}
					</div>

					<div className={cityClasses}>
						<label htmlFor='city'>Miasto</label>
						<input type='text' id='city' onBlur={cityBlurHandler} onChange={cityChangeHandler} value={cityInput} />
						{cityIsInvalid && <p className={classes['error-text']}>Pole nie może być puste</p>}
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
				<div className='form-actions'>
					<Button disabled={!formIsValid} text='Zamów' />
				</div>
			</form>
		</>
	);
}
