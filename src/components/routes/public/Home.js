import axios from "axios";

import { useEffect, useState } from "react";

import { Route1 } from "../../utils/routes";

import "./style.scss";

const Home = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    const getBackendMessage = async () => {
      const message = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);

      setBackendMessage(message.data.msg);
    };

    getBackendMessage();
  }, []);

  return (
    <Route1
      content={
        <>
          <p>{backendMessage}</p>
        </>
      }
      title="Home"
    />
  );
};

export default Home;
