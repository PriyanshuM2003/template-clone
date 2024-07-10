"use client";
import Link from "next/link";
import React from "react";
import Footer from "../Footer";

const Unauthorized = () => {
  return (
    <>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <h1 className="display-1">401</h1>
                    <p className="lead">Unauthorized</p>
                    <p>Access to this resource is denied.</p>
                    <Link href={"/dashboard"}>
                      <i className="fas fa-arrow-left me-1"></i>
                      Return to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutError_footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
