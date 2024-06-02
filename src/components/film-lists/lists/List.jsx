import React from 'react';
import './list-css/list.css';

const List = ({ film, isSelected }) => (
  <div
    className={`list font-[600] text-[15px] w-[300px] h-[240px] text-white cursor-pointer ${isSelected ? 'selected' : ''} rounded-[9px] p-3`}
  >
    <img
      alt="film-image"
      src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
      className='w-[400px] h-[140px] rounded-md object-cover'
    />

    <div className='mt-[10px]'>
      <div>
        {film.original_title}
      </div>
      <div>
        {film.release_date}
      </div>
    </div>
  </div>
);

export default List;
