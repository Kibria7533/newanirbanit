import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
// import "./Home.css";
import "./Contact.css";
import techData from "../../Utility/techData";
import CustomButton from "../../Components/CustomButton/CustomButton";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import Pagetitle from "../../Components/Pagetitle/Pagetitle.js";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

const Contact = () => {
  return (
    <>
      {/* pagetitle */}
      <Grid container className="section pagetitle_bg pt_90 pb_45">
        <Grid item xs={12} md={12} className="pagetitle_section">
          <Pagetitle
            icon={<ContactMailOutlinedIcon className="pagetitle_icon" />}
            text={"Contact Us"}
          />
        </Grid>
      </Grid>
      {/* contact*/}
      <Grid container className="section pt_45 pb_45">
        {/* contact form */}
        <Grid container spacing={10}>
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
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
          <Grid item xs={12} lg={5}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
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

export default Contact;
