/* eslint-disable react/jsx-no-duplicate-props */
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Update = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };

  const marginTop = { marginTop: 5 };
  const { id } = useParams();
  const { users, loading } = useSelector((state) => state.app);
  const [updateData, setUpdateData] = useState();

  useEffect(() => {
    if (id) {
      const Singelusers = users.filter((user) => user.id === id);
      setUpdateData(Singelusers);
    }
  }, []);

  console.log(updateData);
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Create List</h2>
          <Typography variant="caption" gutterBottom>
            Update data Here
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={updateData && updateData[0].name}
            // onChange={getUserData}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Enter your email"
            value={updateData && updateData[0].email}
            // onChange={getUserData}/
          />
          <TextField
            fullWidth
            label="age"
            name="age"
            placeholder="Enter your Age"
            value={updateData && updateData[0].age}
            // onChange={getUserData}
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
                checked={updateData && updateData[0].gender === "female"}
                label="Female"
                // onChange={getUserData}
              />
              <FormControlLabel
                name="gender"
                value="male"
                control={<Radio />}
                checked={updateData && updateData[0].gender === "male"}
                label="Male"
                // onChange={getUserData}
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

export default Update;
