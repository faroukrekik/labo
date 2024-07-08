import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./compoments/login/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import LoggedIn from "./compoments/login/LoggedIn";
import Profile from "./compoments/USERS/Profile";
import Home from "./compoments/Home";
import HeaderNav from "./compoments/HeaderNav";
import { useSelector } from "react-redux";
import Adminappointment from "./compoments/Admin/Adminappointment";
import UsersAppointmentList from "./compoments/USERS/UsersAppointmentList";
import EDITAdminCard from "./compoments/Admin/EDITAdminCard";
import Rdvadd from "./compoments/Rdvadd";
import Services from "./compoments/Services";
import ContactLabo from "./compoments/ContactLabo";

function App() {
  const { isAuth, user, loading } = useSelector((state) => state.reducer);
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/login"} element={<LoggedIn />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/Contact us"} element={<ContactLabo />} />

          {user && isAuth && user.userRole === "admin" ? (
            <>
              {/* Admin routes after login */}
              <Route path="/admin/rendezvous" element={<Adminappointment />} />
            </>
          ) : (
            <>
              {/* User routes after login */}
              <Route
                path="/client/rendezvous"
                element={<UsersAppointmentList />}
              />
              <Route path="/client/rendez-vous en ligne" element={<Rdvadd />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
