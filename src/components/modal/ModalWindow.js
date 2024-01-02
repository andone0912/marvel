import { useState } from 'react';
import React from 'react'

function ModalWindow({handleFavouritesClick, movie, favouriteComponent, title}) {
  const [modal, setModal] = useState(false);
  const FavouriteComponent = favouriteComponent

  const handleClick = () => {
		setModal(!modal)
}

if(modal) {
  document.body.classList.add('.active-modal')
} else {
  document.body.classList.remove('.active-modal')
}
  return (
    <>
      <div className='setter'>{modal && 
            <div className='overlay1' onClick={handleClick}>
              <div className='modal-text'>
                <span onClick={handleClick} className='button'>
                  <span>X</span>
                </span>
                <div>
                  <img src={movie}></img>
                  <div>{title}</div>
                </div>
              </div>
            </div>}</div>
      <div className='image-container d-flex justify-content-start m-3 div-relative'>
            <img src={movie} alt='movie' onClick={handleClick}/>
            <div
              onClick={() => handleFavouritesClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'>
              <FavouriteComponent />
            </div>
      </div>
    </>
  )
}

export default ModalWindow;
