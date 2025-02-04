import "./style.scss";

export const Input1 = ({
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}) => (
  <input
    className="input input1"
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);
