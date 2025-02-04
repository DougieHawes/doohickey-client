import { FaSun, FaMoon } from "react-icons/fa";

import "./style.scss";

const ModeToggle = ({ darkmode, onClick }) => {
  return (
    <div className="mode-toggle" onClick={onClick}>
      {darkmode ? (
        <FaSun className="mode-toggle-image" size={21} />
      ) : (
        <FaMoon className="mode-toggle-image" size={21} />
      )}
    </div>
  );
};

export default ModeToggle;
