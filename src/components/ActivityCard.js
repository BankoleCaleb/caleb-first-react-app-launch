function ActivityCard(props) {
  return(
    <div className="activity-card">
      <img src={props.src} alt={props.alt}/>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default ActivityCard;