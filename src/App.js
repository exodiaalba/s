
import './App.css';
import Add from './Component/Add';
import Filter from './Component/Filter';
import MovieList from './Component/MovieList';
import NavBar from './Component/NavBar';
import {movies} from './Component/Movies';
import {useState} from 'react';
import Cars from "./Component/cars";
function App() {
   //console.log(movies);

   const [movieList,setmovieList]=useState (movies)
   console.log(movieList);



  return (
    <div className="App">
      <NavBar/>
      <Filter/>
      <Add/>
      <MovieList movieList={movieList} />
      <Cars/>
    </div>
  );
}

export default App;
