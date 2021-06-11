import React from "react";
import Button from '@material-ui/core/Button';
import "./Custombutton.css";
import TelegramIcon from '@material-ui/icons/Telegram';

const CustomButton = ({ text, icon }) => {
  return (
    <>
      <Button
        className="custom_btn"
        endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      >
        <span className="btn_text">{text}</span>
        <TelegramIcon className='custom_btn_icon'/>
      </Button>
    </>
  );
};

export default CustomButton;