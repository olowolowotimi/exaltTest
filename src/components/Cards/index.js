import React from "react";
import cardStyle from "./style/Cards.module.css";
import{MdEmail} from 'react-icons/md';
import {FiPhone} from "react-icons/fi";
import {BiBuildingHouse} from "react-icons/bi";
import {CgWebsite} from "react-icons/cg";
import {FaAddressCard} from "react-icons/fa";
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
            <hr className={cardStyle.line}/>
            <p><span><MdEmail/></span> {email}</p>
            <p><span><FiPhone/></span>  {phone}</p>
            <p><span><BiBuildingHouse/></span>  {company}</p>
            <p><span><CgWebsite/></span>  {website}</p>
            <p><span>
              <FaAddressCard/></span>  {address.street}, {address.suite}, {address.city},
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
