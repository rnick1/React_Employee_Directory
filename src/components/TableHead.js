import React, { Component } from "react";
import { Table } from 'react-bootstrap';

class TableHead extends Component {
    render() {
      return (
        <div>
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
            </Table>
        </div>
      )
    }
}

export default TableHead;