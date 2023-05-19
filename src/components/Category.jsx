import MealItem from "./MealItem";
import classes from './Category.module.css'


export default function Category ({mealsData}){

const meals = mealsData.map(meal => {
    return (
        <MealItem key={meal.id} id={meal.id} name={meal.name} imgSmall={meal.imgSmall} price={meal.price}/>
    )
})
return (
    <div className={classes.category}>
       
        {meals}
    </div>
)
}