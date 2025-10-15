import AppBar from "./components/AppBar/AppBar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <div className="sm:w-[600px] mx-auto grid grid-cols-1">
        {currentView === "home" && <Home />}

        <AppBar setCurrentPage={setCurrentView} />
      </div>
    </>
  )
}

export default App
