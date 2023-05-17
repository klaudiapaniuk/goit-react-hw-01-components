import PropTypes from 'prop-types';
import css from '../FriendList/FriendsListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    {isOnline ? (
      <span className="online-stat"></span>
    ) : (
      <span className="offline-stat"></span>
    )}
    <img className="avatar-friend" src={avatar} alt={name} width="48" />
    <p className="name-friend">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
