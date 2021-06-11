import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 300,
  },
});

const Teams = () => {
  const classes = useStyles();

  return (
    <Grid className="teams_card">
      <Grid container spacing={1}>
        {/* project */}
        <Grid item xs={12}>
          <Grid container spacing={8}>
            {techData.teams.map((team, index) => (
              <>
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card className="">
                    <CardActionArea>
                      <CardMedia className={classes.media} image={team.image} />
                      <CardContent>
                        <Typography className="teams_name" variant={"body1"}>
                          {team.name}
                        </Typography>
                        {/* <Typography
                          variant={"body1"}
                          className=" teams_position"
                        >
                          {team.position}
                        </Typography>
                        <Typography
                          className="teams_short_details"
                          variant="body2"
                        >
                          {team.details}
                        </Typography>
                        
                      <div className='teams_social'>
                      {team.links.map((link) => {
                          return (
                            <a
                              href={link.link}
                              target="_blank"
                              rel="noreferrer"
                              className="teams_social_icon"
                            >
                              {link.icon}
                            </a>
                          );
                        })}
                        <a
                              href="www.google.com"
                              target="_blank"
                              rel="noreferrer"
                              className="teams_link"
                            >
                              View Details
                            </a>
                      </div> */}
                      {/* <Button text={"View Details"} /> */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Teams;
