import React from 'react'
import { getTrendingMovies } from 'helpers/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    

  const [movies, setMovies ] = useState([]);

  useEffect(() => {

    getTrendingMovies().then(resultMovies => {
        setMovies(resultMovies);
    });


  }, [])

  return (


    <div>Home
        <ul>
            {movies.map(item => ( <li key={item.id}><Link to={`/movies/${item.id}`}>{item.original_title}</Link></li> )
            )}
        </ul>
    </div>
  )
}

