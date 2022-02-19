import "./ActivityList.scss";
import ActivityListItem from "../ActivityListItem/ActivityListItem";

function ActivityList() {
  return (
    <section class="activity-list">
      <div>
        <h3>Activity Feed</h3>
        <ActivityListItem />
        <ActivityListItem />
        <ActivityListItem />
      </div>
    </section>
  );
}

export default ActivityList;
