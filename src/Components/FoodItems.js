import "./FoodItems.css";
export default function FoodItems({ food, setFoodId }) {
  return (
    <div className="itemContainer">
      <img className="itemImage" src={food.image} alt="" />
      <div className="itemContent">
        <p className="itemName">{food.title}</p>
      </div>
      <div className="buttonContainer">
        <button onClick={() => setFoodId(food.id)} className="itemButton">
          View recipe
        </button>
      </div>
    </div>
  );
}
