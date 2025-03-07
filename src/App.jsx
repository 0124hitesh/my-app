import { useDispatch } from "react-redux";
import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import { addUser, removeUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  }

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }

  return (
    <>
      <button onClick={() => addNewUser("XYZ")}>Add User</button>
      <button onClick={() => deleteUser(0)}>Delete User</button>
      <DisplayUsers />
    </>
  );
}

export default App;
