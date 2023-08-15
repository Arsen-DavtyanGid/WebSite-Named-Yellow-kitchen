import logoFooter from "../images/logoFooter.svg";
import appStore from "../images/appStore.svg";
import googlePlay from "../images/googlePlay.svg";
import outline from "../images/Outline.svg";
import instagram from "../images/insta.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/face.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="footer-logo">
              <img src={logoFooter} alt="logoFooter" />
            </div>
            <div className="medias">
              <img src={appStore} alt="appStore" />
              <img src={googlePlay} alt="googlePlay" />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="lists">
              <ul>
                <p>About us</p>
                <li>
                  <a href="/">Concept</a>
                </li>
                <li>
                  <a href="/">Franchise</a>
                </li>
                <li>
                  <a href="/">Business</a>
                </li>
                <li>
                  <a href="/">Restaurant signup</a>
                </li>
                <li>
                  <a href="/">For Investors</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="lists">
              <ul>
                <p>Get help</p>
                <li>
                  <a href="/">Read FAQs</a>
                </li>
                <li>
                  <a href="/">Restaurants</a>
                </li>
                <li>
                  <a href="/">Specialities</a>
                </li>
                <li>
                  <a href="/">Sign up to deliver</a>
                </li>
                <li>
                  <a href="/">
                    English <img src={outline} alt="outline" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="lists">
              <ul>
                <p>Contact us</p>
                <li>
                  <a href="/">Yellow kitchen Paris 11</a>
                </li>
                <li>
                  <a href="/">69 avenue de la Republique 75011 Paris</a>
                </li>
                <li>
                  <a href="/">0800 111 126</a>
                </li>
                <li>
                  <a href="/">contact@yellowkitchens.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footer-footer">
          <div className="col-lg-6 col-md-6">
            <div className="social-icons">
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="terms">
                <div className="footer-links">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms</a>
                    <a href="/">© 2020 Yellow kitchen</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
