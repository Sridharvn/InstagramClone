import "../styles/Navigation.scss"
import searchIcon from "./../images/searchIcon.png"
import Menu from "./Menu"
function Navigation() {
    return (
      <div className="navigation">
        <div className="container">
          <img
            className="logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt="instagram logo"
          />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu/>
        </div>
      </div>
    );
}
export default Navigation;