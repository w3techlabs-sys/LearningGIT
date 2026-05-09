// src/components/footer/FooterColumn.jsx
import "./FooterColumn.css";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h5 className="footer-column-title">{title}</h5>

      <ul className="footer-links">
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;