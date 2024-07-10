"use client";
import tableData from "@/lib/tableData";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    let areaChartInstance: any = null;
    let barChartInstance: any = null;

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

    initAreaChart();
    initBarChart();

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
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Primary Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">Warning Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">Success Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                      <div className="card-body">Danger Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-area me-1"></i>
                        Area Chart Example
                      </div>
                      <div className="card-body">
                        <canvas
                          id="myAreaChart"
                          width="100%"
                          height="40"
                        ></canvas>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Bar Chart Example
                      </div>
                      <div className="card-body">
                        <canvas
                          id="myBarChart"
                          width="100%"
                          height="40"
                        ></canvas>
                      </div>
                    </div>
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
}
