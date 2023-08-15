import Restaurant from "./Restaurant";
import rest1 from "../images/rest1.png"
import rest2 from "../images/rest2.png"
import rest3 from "../images/rest3.png"
import rest4 from "../images/rest4.png"

function Section2() {
  return (
    <section className="Section2">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="section2-text">Restaurants</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="section2-btn-part">
              <button>show all</button>
            </div>
          </div>
        </div>
        <div className="rests">
          <Restaurant img = {rest1}/>
          <Restaurant img = {rest2}/>
          <Restaurant img = {rest3}/>
          <Restaurant img = {rest4}/>
        </div>
      </div>
    </section>
  );
}
export default Section2;
