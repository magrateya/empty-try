import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const MovieDetailView = lazy(() =>
  import('./views/MovieDetailsView' /* webpackChunkName: "details-page" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-page" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "404-page" */),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailView />
          </Route>

          <Route path="/movies">
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
