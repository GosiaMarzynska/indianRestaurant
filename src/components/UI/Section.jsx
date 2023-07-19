import React from 'react';
import classes from './Section.module.css'


export default function Section({children, title, sectionId}){
    return(
    <section className={classes.section} id={sectionId}>
        <h2 className={classes.title}>{title}</h2>
        {children}
    </section>
    )

}