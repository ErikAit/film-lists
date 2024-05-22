import React from 'react';

export default function List({ film, handleSelectMovie, isSelected }) {
  return (
    <div className={`list text-white cursor-pointer ${isSelected === true ? 'border-[1px] border-white font-[600]' : ''} rounded-[9px] p-3`} onClick={() => handleSelectMovie(film)}>
      <img
        alt="film-image"
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        className='w-[250px] h-[140px] rounded-md object-cover'
      />
      <div>
        {film.original_title}
      </div>
      <div>
        {film.release_date}
      </div>
    </div>
  );
}
