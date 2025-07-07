import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
}

export default App;
