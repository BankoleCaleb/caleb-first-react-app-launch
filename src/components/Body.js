import ActivityCard from "./ActivityCard";
import concert from "../images/concert.png";
import picnic from "../images/picnic.png";
import sports from "../images/sports.png";

function Body() {
  return (
    <main>
      <h2>Top three activities to do at Lagos</h2>
      <div className="activity-container">
        <ActivityCard 
          // src="images/concert.png"
          src={concert}
          alt="theatre hall"
          heading="Attend a show or a concert"
          text="The IMAX Cinemas is a great place to spend your night out."
        />
        <ActivityCard 
          src={picnic}
          alt="picnic outing"
          heading="Go for a piknic in the local park"
          text="The Lekki CC Park is perfect for piknic, getting some tan, or just chilling out."
        />
        <ActivityCard 
          src={sports}
          alt="football"
          heading="Play sports at the Lilleborg field"
          text="Play volleyball, football, basket ball or lift some weights."
        />
      </div>
    </main>
  )
}

export default Body;