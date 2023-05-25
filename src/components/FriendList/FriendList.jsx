import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </List>
  );
};

export { FriendList };
