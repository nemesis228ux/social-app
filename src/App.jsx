import AppBar from "./components/AppBar/AppBar";
import Home from "./pages/Home";
import { useState } from "react";
import PicturesPage from "./pages/PicturesPage";
import SearchPage from "./pages/SearchPage";

function App() {
  
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <div className="sm:w-[600px] mx-auto grid grid-cols-1">
        {currentView === "home" && <Home />}
        {currentView === "pictures" && <PicturesPage/>}
        {currentView === "search" && <SearchPage/>}

        <AppBar setCurrentPage={setCurrentView} />
      </div>
    </>
  )
}

export default App
