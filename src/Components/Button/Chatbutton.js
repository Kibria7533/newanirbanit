import React from "react";
import Button from '@material-ui/core/Button';
import './Chatbutton.css';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

const Chatbtn = ({ text, icon }) => {
  return (
    <>
      <Button
        className="chat_btn"
        endIcon={icon ? <div className="chat_btn_icon_container">{icon}</div> : null}
      >
        
        <span className="chat_btn_text">{text}</span>
        <RateReviewOutlinedIcon className="chat_btn_icon"/>
      </Button>
    </>
  );
};

export default Chatbtn;