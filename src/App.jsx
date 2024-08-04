import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-[85vh] mx-40 my-14">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
