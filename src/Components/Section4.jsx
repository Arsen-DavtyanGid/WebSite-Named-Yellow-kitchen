import Speciality from "./Speciality";
import bagel from "../images/Specialities/bagel.svg";
import burger from "../images/Specialities/burger.svg";
import chicken from "../images/Specialities/chicken.svg";
import fish from "../images/Specialities/fish.svg";
import fishChips from "../images/Specialities/fishnchips.svg";
import salads from "../images/Specialities/vegan.svg";
import pizza from "../images/Specialities/pizza.svg";
import raviolli from "../images/Specialities/raviolli.svg";

function Section4() {
  return (
    <section className="Section4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="section4-title">Specialities</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="section4-btn">
              <button>show all</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="Specialities">
            <Speciality icon={bagel} text="Bagel" />
            <Speciality icon={burger} text="Burger" />
            <Speciality icon={chicken} text="Chicken" />
            <Speciality icon={fish} text="Fish" />
            <Speciality icon={fishChips} text="Fish’Chips" />
            <Speciality icon={salads} text="Salads" />
            <Speciality icon={pizza} text="Pizza" />
            <Speciality icon={raviolli} text="Pasta" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section4;
