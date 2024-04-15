const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  );
};

export default FriendListItem;
