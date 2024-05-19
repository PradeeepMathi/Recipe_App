import Item from "./Item";

export default function ListItem({ food, loading }) {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {food.extendedIngredients.map((item) => (
            <Item key={item.name} image={item.image} name={item.name} amount={item.amount} unit={item.unit}/>
          ))}
        </div>
      )}
    </div>
  );
}
