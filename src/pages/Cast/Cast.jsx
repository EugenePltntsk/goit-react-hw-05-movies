import { getCast } from 'helpers/API';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(castData => {
      setCast(castData);
    });
  }, []);

  return (
    <div>
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.reduce((acc, oneCast) => {
            if (oneCast.profile_path) {
              
              acc.push(
                <li className={css.Lishka}>
                  <img
                    className={css.castPhotos}
                    src={`https://image.tmdb.org/t/p/w500${oneCast.profile_path}`}
                  />
                  <h3 className={css.castName}>{oneCast.name}</h3>
                </li>
              );
            }
            return acc;
          }, [])}
        </ul>
      ) : (
        <span>No actors list found</span>
      )}
    </div>
  );
}
