import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Recipes from "./Components/Recipes"
import Axios from "axios";

function App() {
    const [search,setSearch]=useState("cake");
    const[recipes,setRecipes]=useState([]);
    const APP_ID="81d47ee4";
    const APP_KEY="7085d5e1da60baa9788a431d15b7d4a8";
    useEffect(()=>{
        getRecipes();
    },[]);
    const getRecipes=async()=>{
        const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
        setRecipes(res.data.hits);
    };
    const onInputChange=e=>{
        setSearch(e.target.value)
    };
    const onSearchClick=()=>
    {
        getRecipes();
    }
  return (
    <div className="App">
      <Header 
      search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
      />
      <div className="container">
      <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
