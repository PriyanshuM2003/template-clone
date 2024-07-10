"use client";
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Link from "next/link";

const LayoutSidenavLight = () => {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Sidenav Light</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Sidenav Light</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    This page is an example of using the light side navigation
                    option. By appending the&nbsp;
                    <code>.sb-sidenav-light</code>
                    class to the&nbsp;
                    <code>.sb-sidenav</code>
                    &nbsp;class, the side navigation will take on a light color
                    scheme. The&nbsp;
                    <code>.sb-sidenav-dark</code>
                    &nbsp;is also available for a darker option.
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutSidenavLight;
