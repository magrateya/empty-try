import PropTypes from 'prop-types';
import styles from './PageHeading.module.css';

export default function PageHeading({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}

PageHeading.propTypes = {
  text: PropTypes.string,
};
