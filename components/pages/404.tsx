"use client";
import Link from "next/link";
import React from "react";
import Footer from "../Footer";

const NotFound = () => {
  return (
    <>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    {/* eslint-disable @next/next/no-img-element  */}
                    <img
                      alt=""
                      className="mb-4 img-error"
                      src="https://startbootstrap.github.io/startbootstrap-sb-admin/assets/img/error-404-monochrome.svg"
                    />
                    <p className="lead">
                      This requested URL was not found on this server.
                    </p>
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

export default NotFound;
