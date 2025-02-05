import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Input1 } from "../../utils/inputs";
import { Button1 } from "../../utils/buttons";

import "./style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "SazzyHippo",
    password: "HeyDuggee85",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:5000/user/signin", formData);

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Route1
      content={
        <form className="form">
          <Input1
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            value={username}
          />
          <Input1
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={password}
          />
          <Button1 onClick={handleSubmit} text="submit" />
        </form>
      }
    />
  );
};

export default SignIn;
