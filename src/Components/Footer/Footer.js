import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import techData from "../../Utility/techData";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Footer = () => {
  return (
    <>
      <Grid container className="footer pt_45">
        <Grid item xs={12} md={12} className=" section footer_fast_part pb_30">
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <img
                src=" Images/logo/logo.jpg"
                alt=""
                className="footer_fast_part_image"
              />
              <div className="footer_fast_part_social">
                {Object.keys(techData.socials).map((key) => (
                  <Grid item className="footer_social">
                    <a
                      href={techData.socials[key].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {techData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </div>
              {techData.email}
            </Grid>
            <Grid item xs={12} sm={6} md={2} className="footer_fast_part_menu">
              <Typography className="footer_fast_part_menu_header">
                Servicess
              </Typography>
              <div className="footer_fast_part_menu_list">
                <ul className="footer_fast_part_menu_list_ul">
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    Lorem ipsum
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    Lorem ipsum
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    Lorem ipsum
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    Lorem ipsum
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2} className="footer_fast_part_menu">
              <Typography className="footer_fast_part_menu_header">
                Quick Link
              </Typography>
              <div className="footer_fast_part_menu_list">
                <ul className="footer_fast_part_menu_list_ul">
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      About
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Contact
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2} className="footer_fast_part_menu">
              <Typography className="footer_fast_part_menu_header">
                Legal
              </Typography>
              <div className="footer_fast_part_menu_list">
                <ul className="footer_fast_part_menu_list_ul">
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Privacy policy
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Personal data
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2} className="footer_fast_part_menu">
              <Typography className="footer_fast_part_menu_header">
                Subscribe Us
              </Typography>
              <div className="footer_fast_part_menu_list">
                {/* <ul className="footer_fast_part_menu_list_ul">
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    Help Center
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                      Live Chat
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                    API docs
                    </a>{" "}
                  </li>
                </ul> */}
                <div className="footer_fast_part_menu_subscribe">
                  <Typography variant={"h6"}>
                    To subscribe to this website for update.
                  </Typography>
                  <Subscribe />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="footer_last_part">
          <Grid item xs={12}>
            <Typography className="footer_last_part_link">
              © Copyright-2020{" "}
              <a
                className="footer_last_part_link"
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
              >
                AnirbanIT
              </a>{" "}
              | All Rights Reserved{" "}
              <a
                className="footer_last_part_link"
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
              >
                AnirbanIT
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
