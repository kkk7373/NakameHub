const Text = ({ items }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="content-box">
          <h3 className="section-title">{items.title}</h3>
          <p className="section-text">{items.text}</p>
        </div>
      </div>
    </section>
  );
};
export default Text;
