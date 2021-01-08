import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import s from './MovieGallery.module.css';
import noImg from '../../img/noImg.jpg';

export default function MovieGallery({ filmArr, loadStatus, path }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      {filmArr?.length > 0 ? (
        <ul className={s.ImageGallery}>
          {filmArr.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: path
                    ? `${path}/${slugify(`${film.title} ${film.id}`, {
                        lower: true,
                      })}`
                    : `${url}/${slugify(`${film.title} ${film.id}`, {
                        lower: true,
                      })}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.ImageGalleryItemImage}
                  src={
                    film.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${film.poster_path}`
                      : noImg
                  }
                  alt={film.title}
                />
              </Link>
              <p>{film.original_title ?? film.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loadStatus && <p className={s.infoText}>Please enter your query.</p>
      )}
    </>
  );
}

MovieGallery.propTypes = {
  filmArr: PropTypes.array,
  loadStatus: PropTypes.bool,
};
