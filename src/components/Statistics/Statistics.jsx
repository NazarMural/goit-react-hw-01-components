import PropTypes from 'prop-types';
import {
  Item,
  Label,
  List,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export { Statistics };
