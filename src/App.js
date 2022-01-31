import Routes from "./router";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userToken, setUserToken] = useState("")
  useEffect(()=>{
    setUserToken(localStorage.getItem("user-token"))
  }, [])
  return (
    <div className="App" >
      <Routes userToken={userToken}/>
    </div>
  );
}

export default App;
