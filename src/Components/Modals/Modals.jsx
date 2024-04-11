import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import "./Modal.css";
const Modals = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  console.log(allUsers);
  console.log(id);
  const singelUser = allUsers.filter((user) => user?.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Button variant="text" onClick={() => setShowPopup(false)}>
          Close
        </Button>
        <h2> {singelUser[0].name}</h2>
        <h3> {singelUser[0].name}</h3>
        <h4> {singelUser[0].age}</h4>
      </div>
    </div>
  );
};

export default Modals;
