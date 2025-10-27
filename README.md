# Employee Dashboard

A React application for managing employee information with a clean and modern interface.

## Features

- **Employee Dashboard**: Displays a list of employees fetched from an external API (https://jsonplaceholder.typicode.com/users)
- **Multiple View Options**: View employee data in Table, Card, or List format
- **Employee Form**: Add new employee information with fields for Name, Designation, Location, and Salary
- **Navigation**: Smooth navigation between Dashboard and Employee Form using React Router
- **Responsive Design**: Built with Bootstrap for mobile-friendly experience
- **Form Validation**: All form fields are required with appropriate validation

## Project Structure

```
employee-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Dashboard.js
│   │   └── EmployeeForm.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Installation

1. Clone or download the project files

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Technologies Used

- **React** (v18.2.0) - JavaScript library for building user interfaces
- **React Router DOM** (v6.20.0) - For routing and navigation
- **Bootstrap** (v5.3.0) - CSS framework for styling
- **JSONPlaceholder API** - External API for employee data

## Usage

### Viewing Employee Dashboard

1. The home page displays all employees fetched from the API
2. Toggle between Table, Card, or List view using the view buttons
3. Employee information includes ID, Name, and Email

### Adding Employee Information

1. Click on "Employee Form" in the navigation bar
2. Fill in all required fields:
   - Name
   - Designation
   - Location
   - Salary
3. Click "Submit" to see confirmation (data is logged to console)
4. Click "Cancel" to return to the dashboard

## Notes

- No backend submission is implemented for the Employee Form
- Form data is logged to the browser console upon submission
- The application uses in-memory state management
- External API provides read-only employee data

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)