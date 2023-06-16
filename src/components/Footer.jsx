import classes from './Footer.module.css';

export default function Footer() {
	const handleCurrentYear = () => new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<div className={classes.wrapper}>
				<div className={classes.boxes}>
					<div className={classes.box}>
						<img
							className={classes['box-logo']}
							src='src\assets\logo\logo-namaste-text.png'
							alt='logo restauracji Namate'
						/>
						<p className={classes['box-text']}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolorum odit officiis nulla ipsum magnam
							soluta maiores facilis magni accusantium!
						</p>
						<div className={classes['box-social']}>
							<a href='#' className={classes['box-link']}>
								<i className='fab fa-twitter-square'></i>
							</a>
							<a href='#' className={classes['box-link']}>
								<i className='fab fa-facebook-square'></i>
							</a>
							<a href='#' className={classes['box-link']}>
								<i className='fab fa-instagram'></i>
							</a>
						</div>
					</div>
					<div className={`${classes.box} ${classes['box-desktop']}`}>
						<h3 className={classes['box-title']}>O nas</h3>
						<ul className={classes['box-list']}>
							<li className={classes['box-list-item']}>
								<a href='#about-us'>Restauracja</a>
							</li>
							<li className={classes['box-list-item']}>
								<a href='#about-us'>Kuchnia</a>
							</li>
							<li className={classes['box-list-item']}>
								<a href='#'>Opinie</a>
							</li>
						</ul>
					</div>
					<div className={`${classes.box} ${classes['box-desktop']}`}>
						<h3 className={classes['box-title']}>Restauracja</h3>
						<ul className={classes['box-list']}>
							<li className={classes['box-list-item']}>
								<a href='#about-us'>O nas</a>
							</li>

							<li className={classes['box-list-item']}>
								<a href='#'>Firma</a>
							</li>
							<li className={classes['box-list-item']}>
								<a href='#'>Kariera</a>
							</li>
						</ul>
					</div>

					<div className={`${classes.box} ${classes['box-desktop']}`}>
						<h3 className={classes['box-title']}>Dokumenty</h3>
						<ul className={classes['box-list']}>
							<li className={classes['box-list-item']}>
								<a href='#'>O nas</a>
							</li>
							<li className={classes['box-list-item']}>
								<a href='#'>Firma</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<hr />
			<p className={classes['bottom-text']}>
				{handleCurrentYear()} &copy; <span className={classes.year}></span> Namaste Indian Restaurant
			</p>
		</footer>
	);
}
