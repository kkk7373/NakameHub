import DiscoverImage from "./DiscoverImage";
import pic from "../assets/community.jpg";
const Discover = () => {
  return (
    <section className="discover-section">
      <div className="container">
        <div className="discover-content">
          <div className="discover-text">
            <h3 className="discover-title">Discover our latest activities</h3>
            <DiscoverImage />
          </div>
          <div className="discover-image">
            <img src={pic} alt="Latest Activities" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discover;
