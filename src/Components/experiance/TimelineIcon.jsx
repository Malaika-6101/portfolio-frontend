function TimelineIcon({ icon }) {

  return (

    <div className="timeline-icon-wrapper">

      <div className="timeline-icon">

        <i className={icon}></i>

      </div>

      <div className="timeline-dot"></div>

    </div>

  );

}

export default TimelineIcon;