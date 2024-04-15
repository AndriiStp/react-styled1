import styled from 'styled-components';

export const FriendItem = styled.li`
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  width: 100%;
  background-color: rgb(224, 213, 213);
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.38) -9px -7px 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 22px;
`;

export const Status = styled.span`
  width: 20px;
  height: 10px;
  background-color: ${p => {
    return p.isOnline ? '#07c700' : '#ff4d4d';
  }};
`;
