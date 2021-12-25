// import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
const {user} = useContext(Context)

  return (
      <div className="App">
   <BrowserRouter>
     <Routes>
     <Route path="/" element={<Topbar />}>
     <Route index element={<Home />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Login />} />
          <Route path="post/:postId" element={<Single />} />
          <Route path="write" element={user ? <Write /> : <Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Route >
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
