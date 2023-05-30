import Section from '../components/UI/Section';
import classes from './Reservation.module.css';
import ReservaionForm from './ReservationForm';

export default function Reservation() {
	return (
		<Section title='Rezerwacja'>
			<ReservaionForm />
		</Section>
	);
}
