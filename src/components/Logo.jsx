import logoImage from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Nakame Hub Logo" className="logo-image" />
      <h1 className="logo">Nakame Hub</h1>
    </div>
  );
};
export default Logo;
