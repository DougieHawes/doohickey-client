import { Route2 } from "../../utils/routes";

import { Input1 } from "../../utils/inputs";
import { Button1 } from "../../utils/buttons";

import "./style.scss";

const Dashboard = () => {
  return (
    <Route2
      content={
        <>
          <form>
            <Input1 />
            <Button1 text="submit" />
          </form>
        </>
      }
    />
  );
};

export default Dashboard;
