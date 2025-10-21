import AppBar from "./components/AppBar/AppBar";
import Home from "./pages/Home";
import { useState } from "react";
import PicturesPage from "./pages/PicturesPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AcountPage";
import CreatePost from "./pages/Create_post_page";

function App() {
  
  const [currentView, setCurrentView] = useState("account");

  return (
    <>
      <div className="sm:w-[600px] mx-auto grid grid-cols-1">
        {currentView === "home" && <Home />}
        {currentView === "pictures" && <PicturesPage/>}
        {currentView === "search" && <SearchPage/>}
        {currentView === "account" && <AccountPage/>}
        {currentView === "create" && <CreatePost/>}

        <AppBar setCurrentPage={setCurrentView} />
      </div>
    </>
  )
}

export default App
