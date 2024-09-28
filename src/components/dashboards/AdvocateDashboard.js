// components/dashboards/AdvocateDashboard.js
import React from 'react';
import './AdvocateDashboard.css';

const AdvocateDashboard = () => {
  return (
    <div className="advocate-dashboard">
      <div className="stats-cards">
        <div className="card">
          <h3>Client Requests</h3>
          <p>15</p> {/* You can dynamically fetch this number */}
        </div>
        <div className="card">
          <h3>Total Pending Cases</h3>
          <p>30</p>
        </div>
        <div className="card">
          <h3>Upcoming Hearings</h3>
          <p>5</p>
        </div>
      </div>

      <h2>Recent Client Requests</h2>
      <table className="recent-requests-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Case Type</th>
            <th>Request Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Property Dispute</td>
            <td>2024-09-22</td>
            <td>Pending</td>
          </tr>
          {/* More client requests */}
        </tbody>
      </table>

      <h2>Upload Client Documents</h2>
      <div className="upload-documents">
        <input type="file" multiple />
        <button>Upload</button>
      </div>

      <h2>Upcoming Hearings</h2>
      <ul className="hearing-list">
        <li>Case #00123: 2024-09-25 at 10:00 AM</li>
        <li>Case #00124: 2024-09-27 at 1:00 PM</li>
        {/* More hearing entries */}
      </ul>

      {/* Video Chat Element (can use third-party services like Twilio or Jitsi) */}
      <div className="video-chat">
        <h2>Video Chat with Client</h2>
        <button>Start Video Call</button> {/* This can link to a video chat service */}
      </div>
    </div>
  );
};

export default AdvocateDashboard;
