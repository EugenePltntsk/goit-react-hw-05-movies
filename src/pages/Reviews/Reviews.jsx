import { getReview } from 'helpers/API';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReview(movieId).then(reviewsData => {
      console.log('reviewsData :>> ', reviewsData);
      setReviews(reviewsData);
    });
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={css.Author}>Author: {review.author}</h3>
              <p className={css.Content}>{review.content}</p>
              <span className={css.Created}>{review.created_at.slice(0, 10)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>No Reviews Found</span>
      )}
    </div>
  );
}
