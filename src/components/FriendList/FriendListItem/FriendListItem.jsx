import { FriendItem, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem class="item">
      <Status isOnline={isOnline}></Status>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

export default FriendListItem;
