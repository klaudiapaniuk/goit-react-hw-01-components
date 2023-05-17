import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    {isOnline ? (
      <span className={styles.onlineStat}></span>
    ) : (
      <span className={styles.offlineStat}></span>
    )}
    <img className={styles.avatarFriend} src={avatar} alt={name} width="48" />
    <p className={styles.nameFriend}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
