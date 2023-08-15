function Speciality(props) {
  return (
    <div className="spec-box">
      <div className="spec-flex">
        <div className="spec-box-icon">
          <img src={props.icon} alt="icon" />
        </div>
        <div className="spec-box-title">{props.text}</div>
      </div>
    </div>
  );
}
export default Speciality;
