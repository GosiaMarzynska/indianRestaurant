import Section from './UI/Section';
import classes from './Contact.module.css';

export default function Contact() {
	return (
		<Section title='Kontakt' sectionId='kontakt'>
			<div className={classes.wrapper}>
				<div className={classes['contact-box']}>
					<h3 className={classes.title}>Dane</h3>
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
							<p style={{fontWeight:'bold'}}>Adres:</p>
							<p>ul. Dąbska 2</p>
							<p>31-666 Kraków</p>
						</div>
					</div>
				</div>
				<div className={classes['hours-container']}>
					<h3 className={classes.title}>Godziny Otwarcia</h3>
					<div className={classes['hours-wrapper']}>
						<ul className={classes['hours-list']}>
							<li className={classes['hours-items']}>
								pon.: <span className={classes.hours}>12:00–21:00</span>
							</li>
							<li className={classes['hours-items']}>
								wt.: <span className={classes.hours}>12:00–21:00</span>
							</li>
							<li className={classes['hours-items']}>
								śr.: <span className={classes.hours}>12:00–21:00</span>
							</li>
							<li className={classes['hours-items']}>
								czw.: <span className={classes.hours}>12:00–21:00</span>
							</li>
							<li className={classes['hours-items']}>pt.: <span className={classes.hours}>12:00–22:00</span></li>
							<li className={classes['hours-items']}>
								sob.: <span className={classes.hours}>12:00–22:00</span>
							</li>
							<li className={classes['hours-items']}>
								nied.: <span className={classes.hours}>12:00–21:00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={classes['map-container']}>
				<h3 className={classes.title}>MAPA</h3>
				<div className={classes.map}>
					<div className={classes.mapouter}>
						<div className={classes['gmap-canvas']}>
							<iframe
								width='100%'
								height='100%'
								id='gmap-canvas'
								src='https://maps.google.com/maps?q=Kraków, ul. Dabska 2&t=&z=15&ie=UTF8&iwloc=&output=embed'
								frameBorder='0'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
