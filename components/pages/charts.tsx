"use client";
import React, { useEffect } from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Link from "next/link";

const Charts = () => {
  useEffect(() => {
    let areaChartInstance: any = null;
    let barChartInstance: any = null;
    let pieChartInstance: any = null;

    const initAreaChart = () => {
      const ctx = document.getElementById("myAreaChart") as HTMLCanvasElement;
      if (ctx) {
        if (areaChartInstance) {
          areaChartInstance.destroy();
        }

        areaChartInstance = new (window as any).Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "Mar 1",
              "Mar 2",
              "Mar 3",
              "Mar 4",
              "Mar 5",
              "Mar 6",
              "Mar 7",
              "Mar 8",
              "Mar 9",
              "Mar 10",
              "Mar 11",
              "Mar 12",
              "Mar 13",
            ],
            datasets: [
              {
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: [
                  10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849,
                  24159, 32651, 31984, 38451,
                ],
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  time: {
                    unit: "date",
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    maxTicksLimit: 7,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 40000,
                    maxTicksLimit: 5,
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });
      }
    };

    const initBarChart = () => {
      const ctx = document.getElementById("myBarChart") as HTMLCanvasElement;
      if (ctx) {
        if (barChartInstance) {
          barChartInstance.destroy();
        }

        barChartInstance = new (window as any).Chart(ctx, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: [4215, 5312, 6251, 7841, 9821, 14984],
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  time: {
                    unit: "month",
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    maxTicksLimit: 6,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });
      }
    };

    const initPieChart = () => {
      const ctx = document.getElementById("myPieChart") as HTMLCanvasElement;
      if (ctx) {
        if (pieChartInstance) {
          pieChartInstance.destroy();
        }

        pieChartInstance = new (window as any).Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Blue", "Red", "Yellow", "Green"],
            datasets: [
              {
                data: [12.21, 15.58, 11.25, 8.32],
                backgroundColor: ["#007bff", "#dc3545", "#ffc107", "#28a745"],
              },
            ],
          },
        });
      }
    };

    initAreaChart();
    initBarChart();
    initPieChart();

    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      new (window as any).simpleDatatables.DataTable(datatablesSimple);
    }

    return () => {
      if (areaChartInstance) {
        areaChartInstance.destroy();
      }
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
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
                <h1 className="mt-4">Charts</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Charts</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    Chart.js is a third party plugin that is used to generate
                    the charts in this template. The charts below have been
                    customized - for further customization options, please visit
                    the official&nbsp;
                    <Link
                      target="_blank"
                      href={"https://www.chartjs.org/docs/latest/"}
                    >
                      Chart.js documentation
                    </Link>
                    .
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    Area Chart Example
                  </div>
                  <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="30"></canvas>
                  </div>
                  <div className="card-footer small text-muted">
                    Updated yesterday at 11:59 PM
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Bar Chart Example
                      </div>
                      <div className="card-body">
                        <canvas
                          id="myBarChart"
                          width="100%"
                          height="50"
                        ></canvas>
                      </div>
                      <div className="card-footer small text-muted">
                        Updated yesterday at 11:59 PM
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-pie me-1"></i>
                        Pie Chart Example
                      </div>
                      <div className="card-body">
                        <canvas
                          id="myPieChart"
                          width="100%"
                          height="50"
                        ></canvas>
                      </div>
                      <div className="card-footer small text-muted">
                        Updated yesterday at 11:59 PM
                      </div>
                    </div>
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

export default Charts;
