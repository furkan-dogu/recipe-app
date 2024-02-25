import { useState } from "react";
import { ImgDiv, HomeImg, HeaderText } from "./Home.style";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const [query, setQuery] = useState("cheese");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_ID = "0f72edac";
  const APP_KEY = "e468430224041bda58726f3d76a91251";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && (
        <Cards recipes={recipes} />
      )}
    </div>
  );
};

export default Home;
