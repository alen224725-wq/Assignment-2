import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display form data in console (no backend submission required)
    console.log('Employee Form Data:', formData);
    alert('Employee form submitted successfully! Check console for data.');

    // Reset form
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container page-container">
      <h1 className="page-title">Employee Form</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="designation" className="form-label">
              Designation <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="form-label">
              Location <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="form-label">
              Salary <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;