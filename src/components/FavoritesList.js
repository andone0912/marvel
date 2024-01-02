import React from 'react'

function FavoritesList({ movies, handleFavouritesClick, favouriteComponent}) {
  const FavouriteComponent = favouriteComponent;
  return (
    <> <div className='row'>{movies.map((link) => {
      return (<div className='image-container d-flex justify-content-start m-3'><img src={link} alt="" />
      <div
        onClick={() => handleFavouritesClick()}
        className='overlay d-flex align-items-center justify-content-center'>
        <FavouriteComponent />
      </div>
      </div>)
    })}</div>
      
    </>
  )
}

export default FavoritesList