import FoodItems from "./FoodItems";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItems key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </>
  );
}
