import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Pagetitle from "../../Components/Pagetitle/Pagetitle.js";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import techData from "../../Utility/techData";
import ServiceButton from "../../Components/Button/Button";


import "./About.css";
import SideLink from "../sidelink/SideLink.js";

const About = () => {
  return (
    <>
      {/* pagetitle */}
      <Grid container className="section pagetitle_bg pt_90 pb_45">
      <SideLink />
        <Grid item xs={12} md={12} className="pagetitle_section">
          <Pagetitle
            icon={<InfoOutlinedIcon className="pagetitle_icon" />}
            text={"About Us"}
          />
        </Grid>
      </Grid>
      {/* about us  */}
      <Grid container className="section service_bg pt_45 pb_45 ">
        <Grid item xs={12}>
          <Grid Grid container spacing={7} className="section_content">
            <Grid item xs={12} sm={12} md={6} className="about_us_right">
              <Typography className="about_us_right_title">
                {" "}
                WHO WE ARE{" "}
              </Typography>
              <Typography variant={"h5"} className="about_us_right_title_extra">
                We Are Here For Digital Agency, Make Your Work Easy.
              </Typography>
              <Typography
                variant={"body1"}
                className="about_us_right_description"
              >
                {techData.about}
              </Typography>
              <ServiceButton text={"Read More"} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="about_us_left">
              <img className="about_right" src="Images/techit.png" alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* about_option */}
      <Grid container className="about_option_section pt_45 pb_46 service_bg">
        <Grid item xs={12}>
          <Grid container>
            {techData.abouts.map((about) => (
              <Grid item xs={12} sm={12} md={6} className="about_option">
                <div className="about_option_icon">{about.icon}</div>
                <div className="about_option_title">
                  <div className="about_option_title_header">
                    <Typography variant={"h5"} className="about_option_title_h">
                      {about.header}
                    </Typography>
                    <Typography variant={"h6"} className="about_option_title_p">
                      {about.details}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
