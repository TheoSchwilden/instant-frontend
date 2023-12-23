import { Route, Routes } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Friends from "./components/Friends/Friends";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[6rem] px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </main>
      <BottomNavBar />
    </div>
  );
}

export default App;
