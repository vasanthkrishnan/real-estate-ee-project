
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from "./component/Header";

export const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/sign-in" element = {<SignIn />} />
        <Route path="/sing-up" element = {<SignUp />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
