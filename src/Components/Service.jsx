function Service(props) {
  return (
    <div className="service-part">
      <div className="service-part-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="service-part-texts">
        <div className="service-part-text">{props.text1}</div>
        <div className="service-part-text">{props.text2}</div>
      </div>
    </div>
  );
}
export default Service;
