import styled from '@emotion/styled';

const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 5px 0px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Status = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? `green` : `red`;
  }};

  margin: 0px 10px;
`;

const UserAvatar = styled.img`
  margin-right: 15px;
`;

const UserName = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
`;

export { Item, Status, UserAvatar, UserName };
