import React from "react";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <a href="/">Home</a> */}
      {/* <a href="/login">Login</a> */}
      {/* <a href="/about">About</a>  */}
      {/* Com ancora a, recarrega a página toda vez que é clicado */}

      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/about">About</Link> */}
      {/**Com Link a página não é recarregada */}

      <Navbar />

      {/* <h1>MainApp</h1> */}
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
