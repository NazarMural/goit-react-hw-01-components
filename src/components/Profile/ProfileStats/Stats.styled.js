import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  background-color: #f6f6f6;

  border-top: 1px solid #b4afaf;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;

  padding: 20px 0px;

  &:last-child {
    border-left: 1px solid #b4afaf;
  }
  &:first-of-type {
    border-right: 1px solid #b4afaf;
  }
`;

const Label = styled.span`
  font-size: 20px;
  color: #b4afaf;
`;

const Quantity = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export { List, Item, Label, Quantity };
