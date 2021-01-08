import { useState, useEffect } from 'react';

import * as movieShelfAPI from '../services/movieshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieGallery from '../components/MovieGallery/MovieGallery';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchPopularMovies().then(data => {
      setMovies([...data.results]);
    });
  }, []);

  return (
    <>
      <PageHeading text="Welcome"></PageHeading>

      <MovieGallery filmArr={movies} path={'/movies'} />
    </>
  );
}
