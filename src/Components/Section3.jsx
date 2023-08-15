import loc from "../images/loc.svg";

function Section3() {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="section3-title1">Your nearest restaurants</div>
            <div className="section3-text1">
              Each kitchen works with its own delivery area
            </div>
            <div className="section3-text1">
              to deliver food to you as soon as possible
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="section3-input">
              <div className="section3-img-location">
                <img src={loc} alt="location" />
              </div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter delivery address"
              />
              <button className="send">send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
