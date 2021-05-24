import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './Components/Movie'
const API_KEY = "4039bc007f415aedddbfe7f5f1b64e7a";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&region=IN";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&language=en-US&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // function to retrieve apis
  const getMovies = (API)=>{
    fetch(API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  };
//Retrieveing data for the first page
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  //retrieve after form submission.
  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API+searchTerm);
      setSearchTerm("");
    }
  };
  const onChangeHandeler = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <header>
        <h1>Cine Carnival</h1>
        <form onSubmit={onSubmitHandeler}>
          <input
            className="search"
            type="search"
            placeholder="search..."
            value={searchTerm}
            onChange={onChangeHandeler} />
        </form>
      </header>
      <div className="movie-container">{
        movies.length > 0 && movies.map((movie) => {

          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </>
  );
}

export default App;
