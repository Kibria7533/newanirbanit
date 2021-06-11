import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import Expencetable from '../../Components/Expencetable/Expencetable';

const Expence = () => {
  return (
    <>
      {/* Servicess */}
      <Grid container className="section pt_45 pb_45">
        <Grid item xs={12} className="section_title mb_30 ">
          <Typography variant={"h5"}>Expence table</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container >
            <Grid item xs={12}>
              <Expencetable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Expence;
