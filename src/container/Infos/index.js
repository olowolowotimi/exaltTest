import React, { useState } from "react";
import Cards from "../../components/Cards";
import Spinner from "../../components/spinner";
import infoStyle from "./style/Infos.module.css";

const Infos = () => {
  const [data, setData] = React.useState([]);
  const [isloading, setisloading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setisloading(false)
        console.log(data);
      });
  }, []);

  const userList = data?.map((users, i) => (
    <Cards
      key={i}
      username={users.username}
      name={users.name}
      email={users.email}
      phone={users.phone}
      company={users.company ? users.company.name : ""}
      website={users.website}
      address={users.address}
    />
  ));
  return isloading ? <Spinner /> : userList;
};

export default Infos;
