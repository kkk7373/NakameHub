import logoImage from "../assets/logo.svg";

const Logo = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="logo-container" onClick={handleLogoClick}>
      <img src={logoImage} alt="Nakame Hub Logo" className="logo-image" />
      <h1 className="logo">Nakame Hub</h1>
    </div>
  );
};
export default Logo;
