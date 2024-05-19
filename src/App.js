import { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainder";
import { FoodDetails } from "./Components/FoodDetails.";

function App() {
  const [foodData, setFooData] = useState([]);
  const [foodId,setFoodId] = useState('656329')
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFooData={setFooData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
