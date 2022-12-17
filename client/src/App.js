import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Dashboard from "./components/pages/Dashboard";
import Admin from "./components/pages/Admin";
import NotFound from "./components/pages/NotFound";
import { AuthProvider } from "./utils/auth";
import AuthRoute from "./utils/AuthRoute";
// import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer";

function App() {
  const getPage = window.location
    .toString()
    .split("/")
    [window.location.toString().split("/").length - 1].toLowerCase();
  return (
    <AuthProvider>
      <Routers>
        {getPage === "dashboard" || getPage === "admin" ? (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<AuthRoute />}>
                <Route path="/login" element={<Admin />} />
                {/* <Route path="/register" element={<Register />} /> */}
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>

        ) : (
          <div>
              <Routes element={<AuthRoute />}>
                <Route path="/" element={<MenuBar />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            <Footer />
          </div>
        )}
      </Routers>
    </AuthProvider>
  );
}

export default App;
