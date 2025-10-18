const List = ({ items, listType }) => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section-title-left">{items.title}</h3>
        {listType === "numbered" ? (
          <ol className="list">
            {items.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="list">
            {items.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default List;
