"use client";
import React, { useEffect } from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import tableData from "@/lib/tableData";
import Link from "next/link";

const Tables = () => {
  useEffect(() => {
    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      new (window as any).simpleDatatables.DataTable(datatablesSimple);
    }
  }, []);

  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Tables</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    DataTables is a third party plugin that is used to generate
                    the demo table below. For more information about DataTables,
                    please visit the&nbsp;
                    <Link target="_blank" href={"https://datatables.net/"}>
                      official DataTables documentation
                    </Link>
                    .
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    DataTable Example
                  </div>
                  <div className="card-body">
                    <table id="datatablesSimple">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.office}</td>
                            <td>{item.age}</td>
                            <td>{item.startDate}</td>
                            <td>{item.salary}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Tables;
