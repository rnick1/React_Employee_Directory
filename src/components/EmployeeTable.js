import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import '../App.css';

class EmployeeTable extends Component {
    render() {
      return (
        <div>
            <Table striped bordered hover variant="light">
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
        </div>
      );
    }
  }

  export default EmployeeTable;