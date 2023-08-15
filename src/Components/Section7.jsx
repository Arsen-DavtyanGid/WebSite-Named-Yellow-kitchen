import Kitchen from "./Kitchen";
import kitchen1 from "../images/kitchen1.svg";
import kitchen2 from "../images/kitchen2.svg";
import kitchen3 from "../images/kitchen3.svg";
import kitchen4 from "../images/kitchen4.svg";

function Section7() {
  return (
    <section className="Section7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section7-title">
              <span>#YellowKitchens </span>in instagram
            </div>
          </div>
        </div>
        <div className="row">
          <div className="kitchens">
            <Kitchen img={kitchen1} />
            <Kitchen img={kitchen2} />
            <Kitchen img={kitchen3} />
            <Kitchen img={kitchen4} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section7;
