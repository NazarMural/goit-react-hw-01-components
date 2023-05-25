import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/colorRandom';

const Section = styled.section`
  width: 300px;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 20px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 0px;
  width: 60px;
  background-color: ${() => getRandomHexColor()};
`;

const Label = styled.span`
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export { Section, Title, List, Item, Label, Percentage };
