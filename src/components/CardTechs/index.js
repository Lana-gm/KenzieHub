import { useEffect, useState } from "react";
import axios from "axios";

const CardTechs = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs(res.data.techs))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ul>
      {techs.map(({ status, title }, index) => (
        <li key={index}>
          <span>Status: {status}</span> <br />
          <span>Title: {title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CardTechs;
