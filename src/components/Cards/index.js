import React from "react";
import cardStyle from "./style/Cards.module.css";
import PropTypes from "prop-types";

const Cards = ({
    username,
    name,
    email,
    phone,
    company,
    website,
    address = []
}) => {
    return(
        <div className={cardStyle.container}>
           <div className={ `card ${cardStyle.card}`}>
               <div className={cardStyle.content}>
               <img src="" alt="" />
               <div className={cardStyle.text}>
               <h1>{name}</h1>
               <p>Email: {email}</p>
               <p>Phone:{phone}</p>
               <p>Company:{company}</p>
               <p>Website:{website}</p>
               <p>Address:{address}</p>
               </div>
               </div>
               </div>
        </div>
    )
}






Cards.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Cards;