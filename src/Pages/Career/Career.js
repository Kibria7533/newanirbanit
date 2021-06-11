import React from "react";
import { Grid, Typography } from "@material-ui/core";
import techData from "../../Utility/techData";
import "./Career.css";
import SideLink from "../sidelink/SideLink";

const Career = () => {
  return (
    <>
      {/* Servicess */}
      <Grid container className="section pt_45 pb_46">
      <SideLink />
        <Grid item xs={12} className="section_title mb_30 ">
          <Typography variant={"h5"}>Our All post</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {techData.careers.map((career, index) => (
              <Grid item xs={12} sm={6} md={3} className="career_content">
                <div key={index} className="career_item">
                  <div >
                    <Typography variant={"h5"} className="career_header">
                        {career.header}
                    </Typography>
                  </div>
                  <div className="career_image">
                    <img src={career.image} alt="anirbanit" />
                  </div>
                  <div>
                    <Typography variant={"h6"} className="career_title">{career.title}</Typography>
                  </div>
                  <div >
                    <Typography variant={"body2"} className="career_details" >{career.details}</Typography>{" "}
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

export default Career;