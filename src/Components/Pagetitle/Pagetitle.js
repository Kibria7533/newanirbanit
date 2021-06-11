import React from "react";
import "./Pagetitle.css";

import { Typography } from "@material-ui/core";

const Pagetitle = ({ text, icon }) => {
  return (
    <>
      <Typography
        className="pagetitle_btn"
        // endIcon={
        //   icon ? <div className="pagetitle_btn_icon_container">{icon}</div> : null
        // }
      >
        <span className="pagetitle_btn_text">
          {text} {icon }
        </span>
      </Typography>
    </>
  );
};

export default Pagetitle;
