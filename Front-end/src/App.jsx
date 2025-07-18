import { useState } from "react";
import "./App.css";
import LeaderBoard from "./Components/LeaderBoard";
import Navbar from "./Components/Navbar";

function App() {
  const [isAddNewUserClicked, setIsAddNewUserClicked] = useState(false);
  return (
    <>
      <Navbar setIsAddNewUserClicked={setIsAddNewUserClicked} />
      <LeaderBoard
        isAddNewUserClicked={isAddNewUserClicked}
        setIsAddNewUserClicked={setIsAddNewUserClicked}
      />
    </>
  );
}

export default App;
