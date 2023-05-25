import styled from '@emotion/styled';

const Table = styled.table`
  width: 300px;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  & th {
  }
`;

const Thead = styled.thead`
  background-color: #6a68f7;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  height: 30px;
  text-align: center;
  &:nth-child(2n) {
    background-color: #ffffff;
  }
`;

const Th = styled.th`
  border: 1px solid #2a2a2a;
`;

const Td = styled.td`
  border: 1px solid #2a2a2a;
`;

export { Table, Tbody, Thead, Td, Tr, Th };
