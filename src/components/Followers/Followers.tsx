import * as SC from "./FollowersStyled"

const Followers:React.FC = () => {
  return (
    <SC.FollowersList>
      <SC.FollowersItem>
        <SC.Login platform="fb">@nathanf</SC.Login>
        <h3>1987</h3>
        <p>followers</p>
        <SC.Difference difference="up">12 Today</SC.Difference>
      </SC.FollowersItem>
      <SC.FollowersItem>
        <SC.Login platform="twitter">@nathanf</SC.Login>
        <h3>1044</h3>
        <p>followers</p>
        <SC.Difference difference="up">99 Today</SC.Difference>
      </SC.FollowersItem>
      <SC.FollowersItem>
        <SC.Login platform="instagram">@realnathanf</SC.Login>
        <h3>11k</h3>
        <p>followers</p>
        <SC.Difference difference="up">1099 Today</SC.Difference>
      </SC.FollowersItem>
      <SC.FollowersItem>
        <SC.Login platform="youtube">Nathan F.</SC.Login>
        <h3>8239</h3>
        <p>subscribers</p>
        <SC.Difference difference="down">144 Today</SC.Difference>
      </SC.FollowersItem>
    </SC.FollowersList>
  );
};

export default Followers;
