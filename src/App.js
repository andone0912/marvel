import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/App.css'
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import DarkMode from "./components/DarkMode"
import FavoritesList from "./components/FavoritesList";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('avengers');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
		console.log(newFavouriteList)
	};
		
	const removeFavouriteMovie = (movie) => {
		console.log(movie)
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.includes(movie)
		)
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
  return (
    <div className="container-fluid movie-app">
				<div className="row d-flex align-items-center mt-4 mb-4 hdr">
					<MovieListHeading heading='Movies' />
					<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
				<nav className="d-flex justify-content-space-between align-items-center nav-bar">
					<DarkMode/>
					<span>Filter</span>
				</nav>
				<div className="row">
					<MovieList
						movies={movies}
						handleFavouritesClick={addFavouriteMovie}
						favouriteComponent={AddFavourites}/>
				</div>
				<div className="row d-flex align-items-center mt-4 mb-4">
					<MovieListHeading heading='Favourites' />
				</div>
				<div className="row">
					<FavoritesList
						movies={favourites}
						handleFavouritesClick={removeFavouriteMovie}
						favouriteComponent={RemoveFavourites} />
				</div>
    </div>
  )
};

export default App