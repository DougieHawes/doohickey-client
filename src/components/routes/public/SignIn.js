import { useState } from "react";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";
import { Route1 } from "../../utils/routes";

import "./style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { username, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Route1
      content={
        <>
          <form className="form">
            <Input1
              name="username"
              onChange={handleChange}
              placeholder="enter username..."
              value={username}
            />
            <Input1
              name="password"
              onChange={handleChange}
              placeholder="enter password..."
              type="password"
              value={password}
            />
            <Button1 onClick={handleSubmit} text="SIGN IN" />
          </form>
        </>
      }
      title="SignIn"
    />
  );
};

export default SignIn;
