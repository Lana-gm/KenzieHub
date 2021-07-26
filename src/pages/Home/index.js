import { useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return localToken;
  });

  useEffect(() => {
    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
  }, []);

  return <>{user.name}</>;
};

export default Home;
