import logo from "../images/logo.svg";
import person from "../images/person.svg";
import cart from "../images/cart.svg";
import call from "../images/call.svg";

function Nav() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.add("add");
  }
  function hidden() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.remove("add");
  }

  return (
    <nav>
      <div className="manu-bar-mobile">
        <div className="manu-bar-x">
          <a href="#" onClick={hidden}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.3848 4.44371L4.41421 21.4143L3 20.0001L19.9706 3.0295L21.3848 4.44371Z"
                fill="#9093A6"
              />
              <path
                d="M19.5563 21.3848L2.58579 4.41421L4 3L20.9706 19.9706L19.5563 21.3848Z"
                fill="#9093A6"
              />
            </svg>
          </a>
        </div>
        <ul>
          <div className="phoneNumber">
            <div className="call-ic">
              <img src={call} alt="call" />
            </div>
            <div className="call-numbers">
              <div className="call-number-1">0800 111 126</div>
              <div className="call-number-time">8:00 - 22:00</div>
            </div>
          </div>
          <li>
            <a href="/">Sounds</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Plugins</a>
          </li>
          <li>
            <a href="/">Studio</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="nav-logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="right-part-nav">
              <div className="person-cart-manu">
                <div className="login">
                  <div className="img-login">
                    <img src={person} alt="person" />
                  </div>
                  <div className="text-login">Log in</div>
                </div>
                <div className="cart">
                  <div className="img-cart">
                    <img src={cart} alt="person" />
                  </div>
                  <div className="text-login">0</div>
                </div>
                <div className="manu-bar">
                  <a href="#" onClick={hiddenManu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M24 13H0V11H24V13Z" fill="#9093A6" />
                      <path d="M24 2H0V0H24V2Z" fill="#9093A6" />
                      <path d="M24 24H0V22H24V24Z" fill="#9093A6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
