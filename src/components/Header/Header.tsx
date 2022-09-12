import "./Header.css";
import imgUrl from "../../assets/icons8-github.svg";

const Header = () => {
  return (
    <div className="header-container">
      <a href="https://github.com/eduardodgdebem/react-sorting">
        <img src={imgUrl} alt="github_logo" />
      </a>
    </div>
  );
};

export default Header;
