// components/dashboards/ClientDashboard.js
import React from 'react';

const ClientDashboard = () => {
  return (
    <div className="client-dashboard">
      <div className="stats-cards">
        <div className="card">
          <h3>My Cases</h3>
          <p>5</p>
        </div>
      </div>

      <h2>My Active Cases</h2>
      <table className="my-cases-table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Advocate Name</th>
            <th>Next Hearing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00123</td>
            <td>Adv. John Doe</td>
            <td>2024-09-25</td>
            <td>In Progress</td>
          </tr>
          {/* More cases */}
        </tbody>
      </table>

      <h2>Advocate Directory</h2>
      <ul className="advocate-list">
        <li>
          <strong>Adv. Jane Doe</strong> - Criminal Law | Court: Supreme Court
          <button>Contact</button>
        </li>
        {/* More advocates */}
      </ul>

      <h2>Chatbot</h2>
      <div className="chatbot">
        <textarea placeholder="Ask anything about IPC sections..."></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ClientDashboard;
