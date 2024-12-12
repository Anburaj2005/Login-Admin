import React from 'react';

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    window.location.reload(); // Reload to go back to login page
  };

  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
