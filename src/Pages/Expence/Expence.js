import React,{ useState } from 'react';
import { Card, Grid, Typography } from "@material-ui/core";
import Expencetable from '../../Components/Expencetable/Expencetable';
import './Expence.css'

const Expence = () => {
  const [search, setSearch] =useState('')
  const handleSearch=(e)=>{
    e.preventDefault();
    setSearch(search)
  }
  return (
    <>
      {/* Servicess */}
      <Grid container className="section pt_45 pb_45">
        <Grid item xs={12} className="section_title mb_30 ">
          <Typography variant={"h5"}>Expence table</Typography>
          <div className="search  mt-5 mb-3">
                        <form onSubmit={handleSearch}>
                        <input type='text' placeholder='Search here' name='name' value={search}
                         onChange={(e)=> setSearch(e.target.value) }  />
                         <button type='button' className='btn btn-primary'>Search</button>
                        </form>
                       </div>
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
