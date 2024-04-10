import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";

const Creates = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };

  const marginTop = { marginTop: 5 };
  const [users, setUsers] = useState({});
  setUsers({ ...users, [e.target.name]: e.target.value });

  return (
    <form>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
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
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              label="age"
              name="age"
              placeholder="Enter your Age"
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
                />
                <FormControlLabel
                  name="gender"
                  value="male"
                  control={<Radio />}
                  label="Male"
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
    </form>
  );
};

export default Creates;
