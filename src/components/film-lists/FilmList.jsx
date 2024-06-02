import React, { useEffect, useState, useRef } from 'react';
import List from './lists/List';
import './lists/list-css/filmlist.css';

export default function FilmList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch('https://api.themoviedb.org/3/search/movie?api_key=877a0b91e805fb63c2bb7e48097344dc&query=batman&page=1');
      const data1 = await response1.json();

      const response2 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=');
      const data2 = await response2.json();

      setMovies([...data1.results, ...data2.results]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleSelectFilm = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        if (e.key === 'ArrowRight') {
          setSelectedMovie((prevSelectedMovie) => Math.min(prevSelectedMovie + 1, movies.length - 1));
        } else if (e.key === 'ArrowLeft') {
          setSelectedMovie((prevSelectedMovie) => Math.max(prevSelectedMovie - 1, 0));
        } else if (e.key === 'ArrowUp') {
          setSelectedMovie((prevSelectedMovie) => Math.max(prevSelectedMovie - 10, 0));
        } else if (e.key === 'ArrowDown') {
          setSelectedMovie((prevSelectedMovie) => Math.min(prevSelectedMovie + 10, movies.length - 1));
        }
      }
    };

    window.addEventListener('keydown', handleSelectFilm);

    return () => {
      window.removeEventListener('keydown', handleSelectFilm);
    };
  }, [movies.length]);

  useEffect(() => {
    if (listRef.current) {
      const selectedListItem = listRef.current.querySelector('.selected');
      if (selectedListItem) {
        selectedListItem.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    }
  }, [selectedMovie]);

  return (
    <div className='film-list my-[10px]'>
      <div className="selected-movie my-[40px]">
        {movies.length > 0 && (
          <div className='pl-[25px]'>
            <div
              className="film-bg rounded-md w-[1000px] h-[400px] bg-cover relative"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movies[selectedMovie].backdrop_path})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              <h1 className='text-white font-[600] text-[32px] absolute bottom-[25%] left-[10px]'>{movies[selectedMovie].title}</h1>
            </div>
          </div>
        )}
      </div>

      <div className="movies-container flex flex-col items-center" ref={listRef}>
        <div className="movies-row">
          {movies.slice(0, 10).map((info, index) => (
            <List
              film={info}
              isSelected={index === selectedMovie}
              key={info.id}
            />
          ))}
        </div>

        <div className="movies-row">
          {movies.slice(10, 20).map((info, index) => (
            <List
              film={info}
              isSelected={index + 10 === selectedMovie}
              key={info.id}
            />
          ))}
        </div>

        <div className="movies-row">
          {movies.slice(20, 30).map((info, index) => (
            <List
              film={info}
              isSelected={index + 20 === selectedMovie}
              key={info.id}
            />
          ))}
        </div>

        <div className="movies-row">
          {movies.slice(30, 40).map((info, index) => (
            <List
              film={info}
              isSelected={index + 30 === selectedMovie}
              key={info.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
