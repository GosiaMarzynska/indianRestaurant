import React from 'react';
import Header from '../components/Header';
import Reservation from '../components/Reservation';
import PageContent from '../components/PageContent';

export default function ReservationPage() {
	return (
		<PageContent>
			<Header />
			<Reservation />
		</PageContent>
	);
}
