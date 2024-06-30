import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../auth/Layout";
const About = lazy(() => import("../pages/about/about"));
const HomePage = lazy(() => import("../pages/homepage/homepage"));
/**
 * Component that defines all the routes for the website
 */
const ClubRoute = () => {

  

  return (
    <Router basename="/">
      <Routes>
        {/* Protected routes for application panel*/}
       <Route element={<Layout />} >
          {/* DashboardView route not accessible for regional Manager*/}
          <Route path="/about" element={
            <About />
          } />
        
          {/* DashboardView route not accessible for regional Manager*/}
          <Route path="/" element={
            <HomePage />
          } />
       </Route>
      </Routes>
    </Router>
  );
};

export default ClubRoute;
