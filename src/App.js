import './App.css';
import React, { Component } from "react";
import axios from "axios";
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import TableHead from './components/TableHead';

/* Future Improvements: 
1. Replace class component design with functional component design
2. Use useState and useEffect hooks
3. Send some of this code to components
4. Place all API code in a file inside a utils folder
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], searchTerm: '', alphabetical: 'az' };
    this.handleChange = this.handleChange.bind(this);
  }

// Handling API call:
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20&nat=US")
      .then(response => {
        console.log(response.data.results);
        this.setState({ employees: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

// Sorting/filtering:
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    let sortedEmployees;
    if (this.state.alphabetical === "az") {
      sortedEmployees = this.state.employees.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
    } else {
      sortedEmployees = this.state.employees.sort((a, b) =>
        a.name.last < b.name.last ? 1 : -1
      );
    }

    let filteredEmployees = sortedEmployees;

    if (this.state.searchTerm)
      filteredEmployees = this.state.employees.filter(emp =>
        emp.name.last.startsWith(this.state.searchTerm)
      );

    const employeeNames = filteredEmployees.map(emp => {
      return <EmployeeTable key={emp.email} first={emp.name.first} last={emp.name.last} username={emp.login.username} password={emp.login.password} email={emp.email}/>;
    });
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <form onSubmit={this.handleSubmit}>
              <label>
                Employee search:
                <input
                  type="text"
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Text>
              <select
                name="alphabetical"
                value={this.state.alphabetical}
                onChange={this.handleChange}>
                <option selected value="az">
                  A to Z
                </option>
                <option value="za">Z to A</option>
              </select>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <TableHead/>
          {employeeNames}
        </Container>
      </div>
    );
  }
}

export default App;
