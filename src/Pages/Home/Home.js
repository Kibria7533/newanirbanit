import React from "react";
import { Grid, Icon, TextField, Typography } from "@material-ui/core";
import "./Home.css";
import techData from "../../Utility/techData";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import Chatbtn from "../../Components/Button/Chatbutton";
import Teams from "../../Components/Teams/Teams";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import SideLink from "../../Components/sidelink/SideLink";
import Homecarousel from "../../Components/Homecarousel/Homecarousel";

const Techit = () => {
  return (
    <>
      {/* side link */}
      <Grid container>
        <Grid item xs={12}>
          <SideLink />
        </Grid>
      </Grid>
      {/* Home carousel */}
      <Grid container className="">
        <Grid item xs={12}>
          <Homecarousel />
        </Grid>
      </Grid>
      {/* our short team*/}
      <Grid container className="team-section white_bg pt_45 pb_45">
        <Grid item xs={12} md={10} className="pb_30">
          <Typography variant={"h5"} className="extra_section_title ">
            Something New and Perfect
          </Typography>
        </Grid>
        <Teams />
      </Grid>
      {/* lets start*/}
      <Grid container className="section white1_bg pt_90 pb_45">
        <Grid item xs={12}>
          <Grid container spacing={5} className="lets_start">
            <Grid item xs={12} sm={12} md={8} className="lets_start_shadow">
              <div>
                <div className="lets_start_icon">
                  <Icon className="lets_start_icon_main">
                    {" "}
                    <SpeakerNotesOutlinedIcon />{" "}
                  </Icon>
                </div>
                <Typography className="lets_start_title" variant="h4">
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className="lets_start_description" variant="body2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  sit et quibusdam nostrum dignissimos harum.
                </Typography>
                <div className="lets_start_btn">
                  <Chatbtn text={"start Chat Now"} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* contact*/}
      <Grid container className="section pt_45 pb_45    contact_color">
        {/* contact form */}
        <Grid container spacing={10}>
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <h6 className="extra_section_title">Contact Form</h6>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3} className="contact_color">
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="E-mail" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="adress" label="Adress" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="number" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* contact information*/}
          <Grid item xs={12} lg={5} className="section_content">
            <Grid container>
              <Grid item className="section_title mb_30">
                <h6 className="extra_section_title">Contact Information</h6>
              </Grid>
              <Grid item xs={12}>
                <Grid container className="contactInfo_item_center">
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <sapn className="contactInfo_item_span">
                        <PinDropOutlinedIcon />{" "}
                      </sapn>
                      {techData.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <sapn className="contactInfo_item_span">
                        <PhoneInTalkOutlinedIcon />{" "}
                      </sapn>
                      {techData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <sapn className="contactInfo_item_span">
                        <DraftsOutlinedIcon />{" "}
                      </sapn>
                      {techData.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className="contactInfo_socialsContainer">
                      {Object.keys(techData.socials).map((key) => (
                        <Grid item className="contactInfo_social">
                          <a
                            href={techData.socials[key].link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {techData.socials[key].icon}
                          </a>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Techit;
