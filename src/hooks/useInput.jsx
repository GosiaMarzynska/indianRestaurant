import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};

const imputStateRecuder = (state, action) => {
	switch (action.type) {
		case 'INPUT':
			return { value: action.value };
		case 'BLUR':
			return {isTouched: true, value: state.value};
		case 'RESET':
			return {value: '',
		isTouched: false}

	}
	return initialInputState;
};

export default function useInput(validateValue) {
	const [inputState, dispatch] = useReducer(imputStateRecuder, initialInputState);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = event => {
		dispatch({ type: 'INPUT', value: event.target.value });
	};

	const inputBlurHandler = event => {
		dispatch({ type: 'BLUR' });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};
	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
}
