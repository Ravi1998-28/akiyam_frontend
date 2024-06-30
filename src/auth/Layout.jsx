import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";

const Layout = () => {

  return (
    <section className="insight_top_wrapper">
      <Header />
      <Suspense
        fallback={
          <div className="graph-loader  d-flex justify-content-center align-items-center">
            <div className="spinner-border spinner-ui d-flex justify-content-center align-items-center" >
              <span className="visually-hidden"></span>
            </div>
          </div>
        }
      >
        <div>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </section>
  )

};

export default Layout;
