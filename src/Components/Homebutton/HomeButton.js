import React from "react";
import Button from '@material-ui/core/Button';
import './HomeButton.css';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

const HomeButtton = ({ text, icon }) => {
  return (
    <>
      <Button
        className="home_btn"
        endIcon={icon ? <div className="home_btn_icon_container">{icon}</div> : null}
      >
        
        <span className="home_btn_text">{text}</span>
        <CodeOutlinedIcon className="btn_icon"/>
      </Button>
    </>
  );
};

export default HomeButtton;