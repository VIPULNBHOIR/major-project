// components/dashboards/ClerkDashboard.js
import React from "react";
import { Line } from "react-chartjs-2"; // Assuming you're using react-chartjs-2 for graphs

const ClerkDashboard = () => {
  const hearingSchedule = [
    {
      caseId: "CR125",
      date: "2024-09-12",
      time: "2:00 PM",
      judge: "Judge Rao",
      status: "Scheduled",
    },
    {
      caseId: "CR126",
      date: "2024-09-13",
      time: "3:30 PM",
      judge: "Judge Iyer",
      status: "Scheduled",
    },
  ];

  const caseTrendData = {
    labels: ["July", "August", "September", "October"],
    datasets: [
      {
        label: "Cases Filed",
        data: [30, 45, 50, 35],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Clerk Dashboard</h2>
      </header>

      <div className="dashboard-stats">
        <div className="card">
          <h4>Total Cases</h4>
          <p>100</p>
        </div>
        <div className="card">
          <h4>Scheduled Hearings</h4>
          <p>20</p>
        </div>
      </div>

      <div className="hearing-schedule">
        <h3>Upcoming Hearings</h3>
        <table className="case-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Judge</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {hearingSchedule.map((hearing) => (
              <tr key={hearing.caseId}>
                <td>{hearing.caseId}</td>
                <td>{hearing.date}</td>
                <td>{hearing.time}</td>
                <td>{hearing.judge}</td>
                <td>{hearing.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="case-trend">
        <h3>Case Filing Trends</h3>
        <div className="chart-container">
          <Line data={caseTrendData} />
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2024 Clerk Dashboard</p>
      </footer>
    </div>
  );
};

export default ClerkDashboard;
