import React from 'react';
import Section from '../components/UI/Section';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import classes from './ErrorSection.module.css'

export default function ErrorSection({ message, title }) {
	return (
		<Section title={title} sectionId='error'>
			<p className={classes.message}>{message}</p>
			<Link to='/menu'>
				<Button text='Powrót' />
			</Link>
		</Section>
	);
}
