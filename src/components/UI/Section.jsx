import classes from './Section.module.css'


export default function Section({children, title}){
    return(
    <section className={classes.section}>
        <h2 className={classes.title}>{title}</h2>
        {children}
    </section>
    )

}