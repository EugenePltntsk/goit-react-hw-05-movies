import { findMovie } from 'helpers/API';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [inputData, setInputData] = useState('');
  const [submitData, setSubmitData] = useState('');
  const [movies, setMovies] = useState([]);

  const getDataFromInput = event => {
    setInputData(event.target.value);
  };

  const submitDataFromInput = event => {
    event.preventDefault();
    setSubmitData(inputData);
  };

  useEffect(() => {
    findMovie(submitData).then(resultData => {
      setMovies(resultData);
    });
  }, [submitData]);

  return (
    <div>
      Movies
      <form onSubmit={submitDataFromInput}>
        <label>
          {' '}
          Search form
          <input
            value={inputData}
            onChange={getDataFromInput}
            placeholder="enter movie name"
            type="text"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                {item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
