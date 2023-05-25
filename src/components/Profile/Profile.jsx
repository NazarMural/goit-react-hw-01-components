import Description from 'components/Profile/ProfileDescription/Description';
import Stats from 'components/Profile/ProfileStats/Stats';
import { Container } from './Profile.styled';

const Profile = props => {
  return (
    <Container>
      <Description
        username={props.username}
        tag={props.tag}
        location={props.location}
        avatar={props.avatar}
      />
      <Stats
        followers={props.stats.followers}
        views={props.stats.views}
        likes={props.stats.likes}
      />
    </Container>
  );
};
export default Profile;
