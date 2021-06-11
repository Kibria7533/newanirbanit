import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Grid } from "@material-ui/core";
import "./Expencedialog";
import Expenceaction from "../Expenceaction/Expenceaction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  // button:{
  //     border: '1px solid red',
  //     color: '#ffffff',
  //     background:'green',
  //     '&:hover':{
  //       background: 'greeen !important',
  //     },
  // },
}));
export default function Expencedialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid>
        <Button color="primary" onClick={handleClickOpen}>
          <EditOutlinedIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle align="center" id="form-dialog-title">
            Edit Income Table
          </DialogTitle>
          <DialogContent>
            <Grid className="editFields">
              <form className={classes.root} noValidate autoComplete="on">
                <TextField
                  id="standard-basic"
                  label="Recevier"
                  defaultValue="Default Value"
                />
                <TextField
                  id="standard-basic"
                  label="Discription"
                  defaultValue="Default Value"
                />
                <TextField
                  id="standard-basic"
                  label="Date"
                  defaultValue="Default Value"
                />
                <TextField
                  id="standard-basic"
                  label="Amount"
                  defaultValue="Default Value"
                />
                <TextField
                  id="standard-basic"
                  label="Unit"
                  defaultValue="Default Value"
                />
                <Expenceaction />
                <TextField
                  id="standard-basic"
                  label="Document"
                  defaultValue="Default Value"
                />
              </form>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={handleClose}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}
