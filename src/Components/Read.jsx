import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReadUser, deleteUser } from "../app/features/userDetailSlice";
import { Link } from "react-router-dom";
import Modals from "./Modals/Modals";
const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(ReadUser());
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading</h1>;
  }
  return (
    <Box>
      {showPopup && (
        <Modals id={id} showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      {users &&
        users.map((user) => (
          <Card
            sx={{
              width: 250,
              marginX: "auto",
              marginTop: "20px",
            }}
            key={user.id}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {user.name}
              </Typography>
              <Typography variant="h5" component="div">
                {user.email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user.age}
              </Typography>
              <Typography variant="body2">{user.gender}</Typography>
              <a
                style={{ marginLeft: "20px" }}
                onClick={() => {
                  [setId(user.id), setShowPopup(true)];
                }}
              >
                Viwe
              </a>
              <Link style={{ marginLeft: "20px" }}>Edit</Link>
              <Link
                onClick={() => {
                  dispatch(deleteUser(user.id));
                }}
                style={{ marginLeft: "20px" }}
              >
                Delete
              </Link>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Read;
