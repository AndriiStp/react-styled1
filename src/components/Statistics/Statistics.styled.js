import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  width: 600px;
  background-color: #e0d5d5;
  box-shadow: -9px -7px 20px 1px rgba(0, 0, 0, 0.38);
  border-radius: 13px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 5px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  list-style: none;
  height: 100px;
`;

export const Item = styled.li`
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.65;
  color: #ffffff;
  text-align: center;
`;
export const Percentage = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.65;
  color: #ffffff;
`;
