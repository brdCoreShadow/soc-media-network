import * as SC from "./OverviewStyles"

const Overview:React.FC = () => {
  return (
    <div>
        <SC.OverviewTitle>Overview Today</SC.OverviewTitle>
    <SC.OverviewList>
      <SC.OverviewItem platform="fb">
        <p>Page Views</p>
        <SC.OverviewItemFlexCon difference="up">
            <h3>87</h3>
            <p>3 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="fb">
         <p>Likes</p>
        <SC.OverviewItemFlexCon difference="down">
            <h3>52</h3>
            <p>2 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="instagram">
         <p>Likes</p>
        <SC.OverviewItemFlexCon difference="up">
            <h3>5462</h3>
            <p>2257 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="instagram">
         <p>Profile views</p>
        <SC.OverviewItemFlexCon difference="up">
            <h3>52k</h3>
            <p>1375 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="twitter">
         <p>Retweets</p>
        <SC.OverviewItemFlexCon difference="up">
            <h3>117</h3>
            <p>303 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="twitter">
         <p>Likes</p>
        <SC.OverviewItemFlexCon difference="up">
            <h3>507</h3>
            <p>553 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="youtube">
         <p>Likes</p>
        <SC.OverviewItemFlexCon difference="down">
            <h3>107</h3>
            <p>19 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
      <SC.OverviewItem platform="youtube">
         <p>Total Views</p>
        <SC.OverviewItemFlexCon difference="down">
            <h3>1407</h3>
            <p>12 %</p>
        </SC.OverviewItemFlexCon>
      </SC.OverviewItem>
    </SC.OverviewList>
    </div>
  );
};

export default Overview;
