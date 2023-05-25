import {
  Item,
  Label,
  List,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

const Statistics = props => {
  return (
    <Section>
      <Title>{props.title}</Title>

      <List>
        {props.stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

export { Statistics };
