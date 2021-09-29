import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <div>
      <TopBar />

      <Register/>
    </div>
  );
}

export default App;
