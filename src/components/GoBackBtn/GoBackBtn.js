import PropTypes from 'prop-types';
import { ImCircleLeft } from 'react-icons/im';
import s from './GoBackBtn.module.css';

export default function GoBackBtn({ onBackClick }) {
  return (
    <button type="submit" className={s.goBackBtn} onClick={onBackClick}>
      <ImCircleLeft style={{ marginRight: 8 }} />
      Go back
    </button>
  );
}

GoBackBtn.propTypes = {
  onBackClick: PropTypes.func,
};
