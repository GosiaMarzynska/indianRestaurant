import React from 'react';
import Section from '../components/UI/Section';
import ReservaionForm from './ReservationForm';

export default function Reservation() {
	return (
		<Section title='Rezerwacja' sectionId='rezerwacje'>
			<ReservaionForm />
		</Section>
	);
}
