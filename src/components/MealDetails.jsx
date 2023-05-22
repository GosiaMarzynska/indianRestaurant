import NumberInput from '../UI/NumberInput'
import classes from './MealDetails.module.css'

export default function MealDetails(props){
    return (
        <div className={classes.description}>
            <p className={classes.text}>{props.description}</p>
            <NumberInput />
            <input className={classes.quantity} type='number' id="quantity" name="quantity" min="1" max="9">

            </input>


            <button className={classes[`add-btn`]}>Add to cart  <i className="fa-solid fa-cart-arrow-down"></i></button>
        </div>
    )
}