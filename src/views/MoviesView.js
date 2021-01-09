import { useState } from 'react';
// import { useQuery } from 'react-query';
import { useInfiniteQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import Loader from '../components/Loader/Loader';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  // const [film, setFilm] = useState([]);
  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get('search'),
  );
  // const [isLoading, setIsLoading] = useState(false);

  // const searchURL = new URLSearchParams(location.search).get('search');

  const onSearchChange = query => {
    history.push({ ...location, search: `search=${query}` });
  };

  const { data, isFetching, status } = useInfiniteQuery(`movies${query}`, key =>
    movieShelfAPI.fetchMoviesByQuery(query),
  );
  // useEffect(() => {
  //   if (!query && searchURL !== null) {
  //     setIsLoading(true);
  //     movieShelfAPI.fetchMoviesByQuery(searchURL).then(data => {
  //       setFilm([...data.results]);
  //       setIsLoading(false);
  //     });

  //     return;
  //   }
  //   if (query) {
  //     setIsLoading(true);
  //     movieShelfAPI.fetchMoviesByQuery(query).then(data => {
  //       setFilm([...data.results]);
  //       setIsLoading(false);
  //     });
  //   }
  // }, [query, searchURL]);

  const onChangeQuery = query => {
    setQuery(query);
    // setFilm([]);
    onSearchChange(query);
  };
  console.log(data);

  // console.log(query);
  return (
    <>
      <PageHeading text="Find movie"></PageHeading>
      <SearchForm onSubmit={onChangeQuery} />
      {status === 'loading' && <Loader />}
      {query && !isFetching && <MovieGallery filmArr={data.pages[0].results} />}
    </>
  );
}
