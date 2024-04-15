import getRandomHexColor from 'components/Utils/Randomcolor';
import {
  StatisticSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticSection>
  );
};

export default Statistics;
