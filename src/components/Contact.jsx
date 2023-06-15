import Section from './UI/Section';
import classes from './Contact.module.css';

export default function Contact() {
	return (
		<Section title='Kontakt'>
			<div className={classes['contact-box']}>
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
			<h2 className={classes.title}>MAPA</h2>

			<div className={classes.map}>
				<div className={classes.mapouter}>
					<div className={classes['gmap-canvas']}>
						<iframe
							width='100%'
							height='100%'
							id='gmap-canvas'
							src='https://maps.google.com/maps?q=Kraków, ul. Dabska 2&t=&z=15&ie=UTF8&iwloc=&output=embed'
							frameborder='0'
							scrolling='no'
							marginheight='0'
							marginwidth='0'></iframe>
					</div>
				</div>
			</div>
		</Section>
	);
}
