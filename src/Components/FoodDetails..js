import { useState, useEffect } from "react";
import "./foodDetails.css";
import ListItem from './ListItem';
export function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "562c43799aeb427b9edee18656867907";
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className="recipeCard">
        <h1 className="recipeName">{food.title}</h1>
        <img className="recipeImage" src={food.image} alt="" />
        <div className="recipeDetails">
          <span>
            <strong>Time: {food.readyInMinutes}</strong>
          </span>
          <span>
            <strong>serving{food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "non-vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>{food.pricePerServing / 100} per serving</span>
        </div>
        <h2>Ingredients</h2>
        <ListItem food={food} loading={loading}/>
        <h2>Instructions</h2>
        <div className="recipenstructions">
          <ol>
            {loading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
