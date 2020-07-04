import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
import { blueGrey } from '@material-ui/core/colors';
import NavBar from "./NavBar";
import Radio from "./Radio";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    height: 600,
    width: 400,
    margin: "0 auto",
    textAlign: "center",
    padding:18
 },
  Input:{
    width:'94%',
    marginBottom: 15
  },

}));



function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar/>

      <Paper elevation={3} className={classes.paper}>
        <h1>LOGIN</h1>
        <p>Join us start learning</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.Input} />
          <br />

          <TextField label="Enter Password" className={classes.Input}  />
          <br/>
         
          <TextField label="Enter your Arrival timing" className={classes.Input}  />
          <br/>

          <TextField label="Enter your your Job Designation" className={classes.Input}  />
          <br/>
         
          <Radio/>

          <Button variant="contained" color="primary" className={classes.Input} >
            LOGIN
      </Button>
        </form>

      </Paper>
    </div>
  );
}

export default App;
