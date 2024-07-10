"use client";
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Link from "next/link";

const LayoutStatic = () => {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Static Navigation</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Static Navigation</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="mb-0">
                      This page is an example of using static navigation. By
                      removing the&nbsp;
                      <code>.sb-nav-fixed</code>
                      &nbsp;class from the&nbsp;
                      <code>body</code>,&nbsp;the top navigation and side navigation
                      will become static on scroll. Scroll down this page to see
                      an example.
                    </p>
                  </div>
                </div>
                <div style={{ height: "100vh" }}></div>
                <div className="card mb-4">
                  <div className="card-body">
                    When scrolling, the navigation stays at the top of the page.
                    This is the end of the static navigation demo.
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

export default LayoutStatic;
