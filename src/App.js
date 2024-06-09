import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Heder";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
