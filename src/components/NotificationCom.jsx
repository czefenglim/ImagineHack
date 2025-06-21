import React, { useState } from "react";

const StatCard = ({ value, label, sub, color }) => (
  <div style={{ flex: 1, background: '#fff', padding: 16, borderRadius: 8 }}>
    <div style={{ fontSize: 28, fontWeight: 600 }}>{value}</div>
    <div style={{ fontSize: 14, color: '#777' }}>{label}</div>
    <div style={{ fontSize: 12, color }}>{sub}</div>
  </div>
);

const ActionItem = ({ icon, text, checked }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: '1px solid #eee', borderRadius: 4 }}>
    {icon === '+' ? (
      <div style={{ width: 20, height: 20, background: '#3498db', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>+</div>
    ) : (
      <input type="checkbox" checked={checked} style={{ width: 16, height: 16, accentColor: '#3498db' }} />
    )}
    <span style={{ fontSize: 14 }}>{text}</span>
  </div>
);

function NotificationCom() {
  const [status, setStatus] = useState("All Status");

  return (
    <div style={{
      fontFamily: 'Segoe UI',
      background: '#f5f7fa',
      padding: 20,
      color: '#333',
      height: '100vh',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 20, margin: '0 0 8px 0', fontWeight: 600 }}>Evaluation History</h2>
          <p style={{ fontSize: 14, margin: 0, color: '#666' }}>Track your case evaluation progress and performance metrics</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ padding: '6px 12px', fontSize: 12, border: '1px solid #ccc', borderRadius: 4, background: '#fff', color: '#000', cursor: 'pointer' }}>Export Report</button>
          <button style={{ padding: '6px 12px', fontSize: 12, border: 'none', borderRadius: 4, background: '#2ecc71', color: '#fff', cursor: 'pointer' }}>Filter</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <StatCard value="247" label="Total Cases" sub="+12 this month" color="#27ae60" />
  <StatCard value="189" label="Completed" sub="76.5% completion rate" color="#27ae60" />
  <StatCard value="34" label="Pending" sub="Due this week: 8" color="#27ae60" />
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', gap: 16, height: 'calc(100vh - 200px)' }}>
        {/* Left */}
        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', paddingRight: 4 }}>

          {/* Report Evaluations Header */}
          <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div style={{ fontWeight: 600 }}>Report Evaluations</div>
              <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, border: '1px solid #ccc' }}>
                <option>All Status</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>In Progress</option>
              </select>
            </div>

            {/* Pending Case */}
            <div style={{ borderTop: '1px solid #eee', paddingTop: 12 }}>
              <span style={{ fontSize: 12 }}>
  <span style={{ fontWeight: 600, color: '#000000' }}>Investigation Status:</span>{' '}
  <span style={{ fontWeight: 600, color: '#e67e22' }}>In Progress</span>
</span>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0' }}>
                <div style={{ fontSize: 12 }}>Case #FB-2024-1248</div>
                <div style={{ fontSize: 12, color: '#000000' }}>Due in 3 days</div>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Economic Policy Impact Analysis</div>
              <p style={{ fontSize: 14, color: '#666', margin: '0 0 8px 0' }}>Review of statistical claims about inflation rates and economic indicators...</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 12 }}> <span style={{ marginLeft: 12 }}></span>
                </div>
                <span style={{ fontSize: 12, color: '#ffffff' }}></span>
              </div>
            </div>
          </div>

          {/* In Progress (No Yellow Progress Bar / No Continue) */}
          <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
            <span style={{ fontSize: 12 }}>
  <span style={{ fontWeight: 600, color: '#000000' }}>Investigation Status:</span>{' '}
  <span style={{ fontWeight: 600, color: '#e67e22' }}>In Progress</span>
</span>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0' }}>
              <div style={{ fontSize: 14 }}>Case #FB-2024-1249</div>
              <div style={{ fontSize: 12, color: '#000000' }}>Started yesterday</div>
            </div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Healthcare Statistics Validation</div>
            <p style={{ fontSize: 14, color: '#666', margin: '0 0 8px 0' }}>Verification of medical research claims and statistical methodologies...</p>
          </div>

          {/* Completed */}
          <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
            <span style={{ fontSize: 12 }}>
  <span style={{ fontWeight: 600, color: '#000000' }}>Investigation Status:</span>{' '}
  <span style={{ fontWeight: 600, color: '#27ae60' }}>Completed</span>
</span>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0' }}>
              <div style={{ fontSize: 14 }}>Case #FB-2024-1246</div>
              <div style={{ fontSize: 12, color: '#000000' }}>1 day ago</div>
            </div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Technology Innovation Claims</div>
            <p style={{ fontSize: 14, color: '#666', margin: '0 0 8px 0' }}>Assessment of technical specifications and performance benchmarks...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 12 }}></div>
              <button style={{
                padding: '4px 8px',
                border: '1px solid #ffffff',
                background: 'none',
                color: '#ffffff',
                borderRadius: 4,
                fontSize: 12
              }}></button>
            </div>
          </div>

          {/* Load Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button style={{
              padding: '8px 16px',
              fontSize: 14,
              border: 'none',
              borderRadius: 4,
              background: '#ffffff',
              color: '#ffffff',
              cursor: 'pointer'
            }}>
              Load
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8 }} />
          <div style={{
            background: '#fff',
            padding: 16,
            borderRadius: 8,
            position: 'sticky',
            top: '50%',
            transform: 'translateY(-50%)',
          }}>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ActionItem icon="+" text="Start New Evaluation" />
              <ActionItem text="View Pending Cases" />
              <ActionItem text="Performance Report" checked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCom;







