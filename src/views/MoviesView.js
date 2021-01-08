import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import Loader from '../components/Loader/Loader';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [film, setFilm] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchURL = new URLSearchParams(location.search).get('search');

  const onSearchChange = query => {
    history.push({ ...location, search: `search=${query}` });
  };

  useEffect(() => {
    if (!query && searchURL !== null) {
      setIsLoading(true);
      movieShelfAPI.fetchMoviesByQuery(searchURL).then(data => {
        setFilm([...data.results]);
        setIsLoading(false);
      });

      return;
    }
    if (query) {
      setIsLoading(true);
      movieShelfAPI.fetchMoviesByQuery(query).then(data => {
        setFilm([...data.results]);
        setIsLoading(false);
      });
    }
  }, [query, searchURL]);

  const onChangeQuery = query => {
    setQuery(query);
    setFilm([]);
    onSearchChange(query);
  };

  return (
    <>
      <PageHeading text="Find movie"></PageHeading>
      <SearchForm onSubmit={onChangeQuery} />
      {isLoading && <Loader />}
      <MovieGallery filmArr={film} loadStatus={isLoading} />
    </>
  );
}
