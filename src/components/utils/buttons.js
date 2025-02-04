import "./style.scss";

export const Button1 = ({ onClick, text }) => (
  <button className="button button1" onClick={onClick}>
    {text}
  </button>
);
