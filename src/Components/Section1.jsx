import plate from "../images/plate.png";
import Service from "./Service";
import deliveryTime from "../images/deliveryTime.svg"
import deliveryFree from "../images/deliveryFree.svg"
import fresh from "../images/fresh.svg"

function Section1() {
  return (
    <section className="Section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="section1-content">
              <div className="section1-texts">
                <div className="section1-text1">Your Food court</div>
                <div className="section1-text1">at home</div>
              </div>
              <div className="section1-buttons">
                <button>
                  Delivery<div className="s1bt2">Order in</div>
                </button>
                <button>
                  Takeout<div className="s1bt2">Grab and go</div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="section1-plate-img">
              <img src={plate} alt="plate" />
            </div>
          </div>
        </div>
      </div>
      <div className="Services">
        <Service icon={deliveryTime} text1="delivery in all paris" text2="in less than 30 minutes"/>
        <Service icon={deliveryFree} text1="Free delivery" text2="from 29 euros"/>
        <Service icon={fresh} text1="Only fresh" text2="and French products"/>
      </div>
    </section>
  );
}
export default Section1;
