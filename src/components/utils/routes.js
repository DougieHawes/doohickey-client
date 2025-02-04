import "./style.scss";

export const Route1 = ({ content, title }) => (
  <div className="route route1">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);

export const Route2 = ({ content }) => (
  <div className="route route2">
    <div className="route-content">{content}</div>
  </div>
);
