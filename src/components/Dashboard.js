import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewType, setViewType] = useState('table'); // 'table', 'card', or 'list'

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container page-container">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container page-container">
        <div className="error-message">
          <h3>Error Loading Employees</h3>
          <p>{error}</p>
          <button className="btn btn-primary mt-3" onClick={fetchEmployees}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <h1 className="page-title">Employee Dashboard</h1>

      <div className="mb-3 text-center">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn btn-sm ${viewType === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewType('table')}
          >
            Table View
          </button>
          <button
            type="button"
            className={`btn btn-sm ${viewType === 'card' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewType('card')}
          >
            Card View
          </button>
          <button
            type="button"
            className={`btn btn-sm ${viewType === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewType('list')}
          >
            List View
          </button>
        </div>
      </div>

      {viewType === 'table' && (
        <div className="employee-table-container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {viewType === 'card' && (
        <div className="row">
          {employees.map((employee) => (
            <div key={employee.id} className="col-md-4 mb-4">
              <div className="card employee-card">
                <div className="card-header">
                  <span className="badge-id">ID: {employee.id}</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{employee.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {employee.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewType === 'list' && (
        <div className="employee-table-container">
          <ul className="list-group">
            {employees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge-id me-3">ID: {employee.id}</span>
                    <strong>{employee.name}</strong>
                  </div>
                  <div>
                    <small className="text-muted">{employee.email}</small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;