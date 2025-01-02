import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;
