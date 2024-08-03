import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen mx-40 my-14 rounded-lg">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
