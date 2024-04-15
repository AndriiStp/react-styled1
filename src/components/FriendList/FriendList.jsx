import FriendListItem from './FriendListItem/FriendListItem';

import { Friends } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend}></FriendListItem>;
      })}
    </Friends>
  );
};

export default FriendList;
