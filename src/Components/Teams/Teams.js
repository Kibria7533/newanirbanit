import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./Teams.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import techData from "../../Utility/techData";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 250,
//   },
//   // media: {
//   //   height: 300,
//   // },
// });

const Teams = () => {
  // const classes = useStyles();

  return (
    <>
      <Grid className="teams_card">
        <Grid container spacing={1}>
          {/* project */}
          <Grid item xs={12}>
            <Grid container spacing={8}>
              {techData.memburs.map((team, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <Card className="">
                    <CardActionArea>
                      <CardMedia
                        // className={classes.media}
                        image={team.image}
                        className="team_image_design"
                      />
                      <CardContent>
                        <Typography className="teams_name" variant={"body1"}>
                          {team.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Teams;
