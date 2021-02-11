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
  address = [],
}) => {
  return (
    <div className={cardStyle.container}>
      <div className={`card ${cardStyle.card}`}>
        <div className={cardStyle.content}>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            alt="avatar images"
          />
          <div className={cardStyle.text}>
            <h1>{name}</h1>
            <p><span>Email</span>:{email}</p>
            <p><span>Phone</span>:{phone}</p>
            <p><span>Company</span>:{company}</p>
            <p><span>Website</span>:{website}</p>
            <p><span>
              Address</span>:{address.street}, {address.suite}, {address.city},
              {address.zipcode}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cards;
