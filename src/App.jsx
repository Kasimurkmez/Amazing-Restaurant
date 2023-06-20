import { Outlet } from "react-router-dom";
import "./index.css";
import Footer from "./Pages/Shared Pages/Footer";
import Header from "./Pages/Header";

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
