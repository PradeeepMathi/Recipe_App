import "./Item.css";
export default function Item({ image, name, amount, unit }) {
  return (
    <div>
      <div className="itemcontainer">
        <div className="imagecontainer">
          <img className='it-image'
            src={`https://spoonacular.com/cdn/ingredients_100x100/` + image}
            alt=""
          />
        </div>
        <div className='namecontainer'>
          <div className='name'>
            {name}
          </div>
          <div className='amount'>
            {amount} {unit}
          </div>
        </div>
      </div>
    </div>
  );
}
