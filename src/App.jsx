import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen p-5">
      <Header />
      <p className="text-3xl uppercase mt-12">init instant app</p>
      <BottomNavBar />
    </div>
  );
}

export default App;
