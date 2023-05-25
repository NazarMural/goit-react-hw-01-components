import { Item, Label, List, Quantity } from './Stats.styled';

const Stats = props => {
  return (
    <List>
      <Item>
        <Label>Followers</Label>
        <Quantity>{props.followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{props.views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{props.likes}</Quantity>
      </Item>
    </List>
  );
};

export default Stats;
