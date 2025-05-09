
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from "./component/Header";
import PrivateRoute from "./component/PrivateRoute";

export const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/sign-in" element = {<SignIn />} />
        <Route path="/sign-up" element = {<SignUp />} />
        <Route path="/about" element = {<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element = {<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
