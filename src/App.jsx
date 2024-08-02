import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
