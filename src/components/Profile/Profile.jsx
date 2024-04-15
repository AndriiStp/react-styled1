import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Label,
  Location,
  Stats,
  StatsItem,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, status }) => {
  return (
    <Wrapper>
      <Description>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          width="300"
        />
        <Name>Petra Marica</Name>
        <Tag>@pmarica</Tag>
        <Location>Salvador, Brasil</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>1000</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>2000</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>3000</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

export default Profile;
