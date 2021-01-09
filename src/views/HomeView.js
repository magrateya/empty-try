// import { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

import * as movieShelfAPI from '../services/movieshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieGallery from '../components/MovieGallery/MovieGallery';

export default function HomeView() {
  //   const [movies, setMovies] = useState(null);

  //   useEffect(() => {
  //     movieShelfAPI.fetchPopularMovies().then(data => {
  //       setMovies([...data.results]);
  //     });
  //   }, []);
  //   console.log(movies);

  const { data, isFetching } = useInfiniteQuery('home', () =>
    movieShelfAPI.fetchPopularMovies(),
  );
  // console.log(data);
  return (
    <>
      <PageHeading PageHeading text="Welcome"></PageHeading>
      {!isFetching && (
        <MovieGallery filmArr={data.pages[0].results} path={'/movies'} />
      )}
    </>
  );
}
