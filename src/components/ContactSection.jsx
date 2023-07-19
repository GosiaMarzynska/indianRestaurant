import React from 'react';
import classes from './ContactSection.module.css';

export default function Contact() {
	return (
		<section className={classes.contact}>
			<div className={classes['contact-box']}>
				<h2 className={classes.title}>Kontakt</h2>
				<div className={classes.text}>
					<p className={classes[`contact-item`]}>
						<i className='fa-solid fa-phone'></i>
						<span className={classes[`contact-item-text`]}> +48 737 167 040</span>
					</p>
					<p className={classes[`contact-item`]}>
						<i className='fa-solid fa-envelope'></i>
						<span className={classes[`contact-item-text`]}> namaste@kontakt.pl</span>
					</p>
					<div className={`${classes[`contact-item`]} ${classes.address}`}>
						<p>Adres:</p>
						<p>ul. Dąbska 2</p>
						<p>31-666 Kraków</p>
					</div>
				</div>
			</div>
		</section>
	);
}
