import React from 'react';
import ModalWindow from './modal/ModalWindow';

const MovieList = ({handleFavouritesClick, movies, favouriteComponent}) => {
	console.log(movies[0])
	return (
		<>
			{movies.map((movie, index,) => (
					<ModalWindow 
					handleFavouritesClick={handleFavouritesClick}
					movie={movie.Poster}
					title={movie.Title}
					favouriteComponent={favouriteComponent}
					/>
			))}
		</>
	);
};

export default MovieList;