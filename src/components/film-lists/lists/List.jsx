import React from 'react';

import './list-css/list.css';

const List = React.forwardRef(({ film, handleSelectMovie, isSelected }, ref) => (
  <div
    ref={ref}
    className={`list w-[300px] text-white cursor-pointer ${isSelected ? 'selected font-[600]' : ''} rounded-[9px] p-3`}
    onClick={() => handleSelectMovie(film)}
  >
    <img
      alt="film-image"
      src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
      className='w-[400px] h-[140px] rounded-md object-cover'
    />
    <div>
      {film.original_title}
    </div>
    <div>
      {film.release_date}
    </div>
  </div>
));

export default List;
