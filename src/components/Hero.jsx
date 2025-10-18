import heroPic from "../assets/nakamerRiver.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-image">
          <img src={heroPic} alt="Nakame Hub Hero Image" />
        </div>
        <h2 className="hero-title">Nakame Hub</h2>
      </div>
    </section>
  );
};

export default Hero;
