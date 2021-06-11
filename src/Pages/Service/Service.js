import React from "react";
import { Grid, Typography } from "@material-ui/core";
import techData from "../../Utility/techData";
import "./Service.css";
import SideLink from "../sidelink/SideLink";

const Work = () => {
  return (
    <>
      {/* Servicess */}
      <Grid container className="section pt_45 pb_46">
      <SideLink />
        <Grid item xs={12} className="section_title mb_30 ">
          <Typography variant={"h5"}>Our Services</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {techData.services.map((service, index) => (
              <Grid key={index} item xs={12} sm={6} md={3} className="service_content">
                <div  className="service_item">
                  <div className="service_image">
                    <img src={service.image} alt="anirbanit" />
                  </div>
                  <div>
                    <Typography variant={"h6"} className="service_title">{service.title}</Typography>
                  </div>
                  <div >
                    <Typography variant={"body2"} className="service_details" >{service.details}</Typography>{" "}
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

export default Work;
