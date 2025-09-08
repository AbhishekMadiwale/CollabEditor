import { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

function App() {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, (user) => {
      console.log("user signed in", user?.uid);
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Welcome to CollabEditor</h1>
      </header>
    </div>
  );
}

export default App;
