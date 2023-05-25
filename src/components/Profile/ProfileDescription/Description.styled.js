import styled from '@emotion/styled';

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

const UserAvatar = styled.img`
  margin-bottom: 30px;
  height: 150px;
  border-radius: 50%;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 35px;
  font-weight: 700;
`;

const UserTag = styled.p`
  margin: 0;
  margin-bottom: 10px;

  color: #b4afaf;
  font-size: 25px;
`;

const UserLocation = styled.p`
  margin: 0;
  margin-bottom: 10px;

  color: #b4afaf;
  font-size: 25px;
`;

export { Desc, UserAvatar, UserName, UserTag, UserLocation };
