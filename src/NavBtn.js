//import fontawesome
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faBars } from "@fontawesome/free-solid-svg-icons";

function NavBtn() {
    return (
      <div className="right-nav">
        <button className="btn nav-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    );
}

export default NavBtn;