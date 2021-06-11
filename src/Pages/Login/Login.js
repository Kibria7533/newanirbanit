import React from "react";
import { Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "../../Components/Button/Button";
import "./Login.css";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";





const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    
  },
  marginIcon: {
    marginLeft: '3px',
    marginRight: '-10px',
    marginBottom: '5px',
    fontSize: '2rem',
    color:'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%) ! important',

  },
  buttonmargin: {
    margin: theme.spacing(3),
  },
  // withoutLabel: {
  //   marginTop: theme.spacing(3),
  // },
  textField: {
    width: '25ch',
  },
}));

function Loginform() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item >
            <AccountCircleOutlinedIcon  className={classes.marginIcon}/>
          </Grid>
          <Grid item>
            
             <TextField
              label="User Name"
              id="standard-start-adornment"
              className={clsx(classes.margin, classes.textField)}
            />
          </Grid>
        </Grid>
      </div>
      <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockOutlinedIcon className={classes.marginIcon} />
          </Grid>
          <Grid item>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttonmargin}>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item>
            <Button text={"Login"} />
          </Grid>
          <Grid item>
            <Button text={"Registration"} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
const Login = () => {
  return (
    <>
      {/* login section */}

      <Grid container className=" section login_page pt_90 pb_45">
        <Grid item className="section_title mb_30">
          <h6 className="extra_section_title">Login Here</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* <Grid item xs={12} sm={12} md={5} className="section_content mb_30">
              <div className="login_left_image">
              <img src="Images/login/login.png" alt="login image" />
              </div>
            </Grid> */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="section_content  mb_30"
            >
              <Loginform />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
    </>
  );
};

export default Login;
