import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

export default function MovieReviewersSubView() {
  const [reviewers, setReviewers] = useState([]);
  // const { movieId } = useParams();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    movieShelfAPI.fetchReviewers(movieId).then(data => {
      setReviewers([...data.results]);
    });
  }, [movieId]);

  return (
    <>
      {reviewers.length > 0 ? (
        <ul>
          {reviewers.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>
                <b>Review:</b> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Sorry, there are no reviewers for this film{' '}
          <span role="img" aria-label="face emoji">
            😦
          </span>
        </p>
      )}
    </>
  );
}
