import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap';

class EmployeeTable extends Component {
    render() {
      return (
        <div>
          <Container>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.last}</td>
                  <td>{this.props.first}</td>
                  <td>{this.props.username}</td>
                  <td>{this.props.password}</td>
                  <td>{this.props.email}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }

  export default EmployeeTable;