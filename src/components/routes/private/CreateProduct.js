import { Route2 } from "../../utils/routes";

import "./style.scss";

const CreateProduct = () => {
  const [formData, setFromData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Route2
      content={
        <>
          <form className="form">
            <Input1 value={password} onChange={handleChange} />
            <Button1 onClick={handleSubmit} />
          </form>
        </>
      }
    />
  );
};

export default CreateProduct;
