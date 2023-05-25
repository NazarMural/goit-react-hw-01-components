import { Item, Status, UserAvatar, UserName } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
};

export { FriendListItem };
