import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 50px auto;
  background-color: #e0d5d5;
  box-shadow: -9px -7px 20px 1px rgba(0, 0, 0, 0.38);
  border-radius: 13px;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  border: solid 4px rgb(180, 99, 99);
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: rgb(54, 64, 64);
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: rgb(54, 64, 64);
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 0px;
  background-color: rgb(215, 224, 221);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.65;
  color: #7c7c8f;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.65;
`;
