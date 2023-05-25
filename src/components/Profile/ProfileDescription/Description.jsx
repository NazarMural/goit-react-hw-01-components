import {
  Desc,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
} from './Description.styled';

const Description = props => {
  return (
    <Desc>
      <UserAvatar src={props.avatar} alt="User avatar" />
      <UserName>{props.username}</UserName>
      <UserTag>@{props.tag}</UserTag>
      <UserLocation>{props.location}</UserLocation>
    </Desc>
  );
};

export default Description;
