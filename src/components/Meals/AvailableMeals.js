import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [mealsList, setMealList] = useState(DUMMY_MEALS)

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList.map((e) => {
                    return <MealItem key={e.id} id={e.id} name={e.name} description={e.description} price={e.price} />
                })}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals;