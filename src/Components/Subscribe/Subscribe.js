import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Subscribe.css";

export default function Subscribe() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="subscribe">
      <Button onClick={handleClickOpen} className="subscribe_btn">
      subscribe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="subscribe_title">Subscribe</DialogTitle>
        <DialogContent>
         <div className="subscribe_details">
         <DialogContentText >
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
         </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <div className="subscribe_submit_btn">
        <Button onClick={handleClose} >
            Cancel
          </Button>
          <Button onClick={handleClose} >
            Subscribe
          </Button>
        </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}