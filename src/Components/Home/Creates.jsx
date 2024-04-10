import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../app/features/userDetailSlice";
const Creates = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };

  const marginTop = { marginTop: 5 };
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const hendelSubmited = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    console.log("users", users);
    navigate("/read");
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle} onSubmit={hendelSubmited}>
        <Grid align="center">
          <h2 style={headerStyle}>Create List</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder="Enter your name"
            onChange={getUserData}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Enter your email"
            onChange={getUserData}
          />
          <TextField
            fullWidth
            label="age"
            name="age"
            placeholder="Enter your Age"
            onChange={getUserData}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                name="gender"
                value="female"
                control={<Radio />}
                label="Female"
                onChange={getUserData}
              />
              <FormControlLabel
                name="gender"
                value="male"
                control={<Radio />}
                label="Male"
                onChange={getUserData}
              />
            </RadioGroup>
          </FormControl>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Creates;
