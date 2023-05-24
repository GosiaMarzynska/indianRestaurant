import classes from './Section.module.css'


export default function Section({children}){
    <section className={classes.section}>
        <h2 className={classes.title}>MENU</h2>
        {children}
    </section>

}