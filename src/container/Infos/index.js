import React from "react";
import Cards from "../../components/Cards";
import infoStyle from "./style/Infos.module.css";


const Infos = () => {
        const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return(
      <div>
            
        {data?.map((users, i) => (
            <Cards key={i}
            name={users.name}
            email={users.email}
            phone={users.phone}
            company={users.company ? users.company.name : ""}
            website={users.website}
            address={users.address}
            />
        ))}
           
          </div>
      
    )
}
      
  
    


export default Infos;