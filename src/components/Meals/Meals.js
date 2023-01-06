import { Fragment } from "react/cjs/react.development";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ()=>{
    return<Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
    </Fragment>

}

export default Meals;