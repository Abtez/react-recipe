import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe  from './recipe';


const App = () => {

  const APP_ID = '2505dfe9';
  const APP_KEY = 'b42b2414ec5de859cca63041ab8ed7ab';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  },[query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
     <h1 className='text-center'>The Recipe World</h1>
     <form onSubmit={getSearch} className='search-form'>
     <input className='form-control' type="text" name="search" onChange={handleChange} value={search} />
       <button className='btn btn-outline-secondary mt-2' type='submit'>Search</button>
     </form>

    <section className='recipe'>
    <div className='recipe-center'>
    {recipe.map(recip => (
      <Recipe key={recipe.id} title={recip.recipe.label} type={recip.recipe.mealType}
       image={recip.recipe.image} ingredients={recip.recipe.ingredients} />
    ))}
    </div>
    </section>

    </div>
  ); 
}

export default App;
