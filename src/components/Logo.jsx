import logoImage from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="logo-container" onClick={handleLogoClick}>
      <img src={logoImage} alt="Nakame Hub Logo" className="logo-image" />
      <h1 className="logo">Nakame Hub</h1>
    </div>
  );
};
export default Logo;
