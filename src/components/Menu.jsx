const Menu = ({ items, className = "" }) => {
  const isMobile = className.includes("mobile-menu");
  const linkClassName = isMobile ? "mobile-nav-link" : "nav-link";

  return (
    <div className={`nav-links ${className}`}>
      {items.map((item, index) => (
        <a key={index} href={item.url} className={linkClassName}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default Menu;
