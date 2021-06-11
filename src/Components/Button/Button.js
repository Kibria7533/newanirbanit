import React from "react";
import Button from '@material-ui/core/Button';
import './Buttuns.css';


const ServiceButton = ({ text, icon }) => {
  return (
    <>
      <Button
        className="service_btn"
        endIcon={icon ? <div className="service_btn_icon_container">{icon}</div> : null}
      >
        
        <span className="service_btn_text">{text}{icon}</span>
      </Button>
    </>
  );
};

export default ServiceButton;