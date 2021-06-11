import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import Incometable from '../../Components/Incometable/Incometable';

const Income = () => {
  return (
    <>
      {/* Income*/}
      <Grid container className="section pt_45 pb_45">
        <Grid item xs={12} className="section_title mb_30 ">
          <Typography variant={"h5"}>Income Table</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container >
            <Grid item xs={12}>
              <Incometable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Income;
