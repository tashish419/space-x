import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./assets/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex h-[85vh] mx-40 my-14">
        <Sidebar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
