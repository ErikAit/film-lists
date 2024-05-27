import React, { useEffect, useState, useRef, createRef } from 'react';
import List from './lists/List';

export default function FilmList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const movieRefs = useRef([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=877a0b91e805fb63c2bb7e48097344dc')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        movieRefs.current = data.results.map(() => createRef());
      });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        if (event.key === 'ArrowRight') {
          setSelectedMovie(index => Math.min(index + 1, movies.length - 1));
        } else if (event.key === 'ArrowLeft') {
          setSelectedMovie(index => Math.max(index - 1, 0));
        } else if (event.key === 'ArrowDown') {
          setSelectedMovie(index => Math.min(index + 10, movies.length - 1));
        } else if (event.key === 'ArrowUp') {
          setSelectedMovie(index => Math.max(index - 10, 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movies]);

  useEffect(() => {
    if (movieRefs.current[selectedMovie]) {
      movieRefs.current[selectedMovie].current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [selectedMovie]);

  const handleSelectMovie = (index) => {
    setSelectedMovie(index);
  }

  return (
    <div className='film-list my-[10px]'>

      <div className="selected-movie my-[40px]">
        {movies.length > 0 && (
          <div className='flex justify-center'>
            <div
              className="film-bg w-[700px] h-[400px] bg-cover relative border-[1px] border-white rounded-md"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[selectedMovie].backdrop_path})` }}
            >
              <h1 className='text-white font-[600] text-[32px] absolute bottom-[10px] left-[10px]'>{movies[selectedMovie].title}</h1>
            </div>
          </div>
        )}
      </div>

      <div className="movies-container">
        <div className="movies w-full h-[290px] my-3 overflow-hidden overflow-x-hidden grid grid-cols-10 px-[20px] gap-[20px] gap-x-[300px]" >
          {movies.map((info, index) => (
            <List
              ref={movieRefs.current[index]}
              film={info}
              isSelected={index === selectedMovie}
              handleSelectMovie={() => handleSelectMovie(index)}
              key={info.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
