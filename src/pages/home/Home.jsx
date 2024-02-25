import { useEffect, useState } from "react";
import {imgDiv,HomeImg,HeaderText} from "./Home.style";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("cheese")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [recipes, setRecipes] = useState("")

  const APP_ID = "0f72edac"
  const APP_KEY = "e468430224041bda58726f3d76a91251"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url)
      setRecipes(data.hits)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home