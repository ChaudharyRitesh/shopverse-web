import { Route, Routes } from "react-router-dom";
import WithAuth from "../hoc/WithAuth";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import HomePage from "../pages/HomePage";

const CustomRoutes = () => {
  const AuhenticatedDashboard = WithAuth(Dashboard);
  const AuthenticatedProfile = WithAuth(Profile);
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<AuhenticatedDashboard />} />
        <Route path="/profile" element={<AuthenticatedProfile />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default CustomRoutes;
