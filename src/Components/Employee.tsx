import { observer } from 'mobx-react';
import React from 'react';
import { Employee } from '../mst';

interface EmployeeComponentProps {
  employee: Employee
}

interface EmployeeComponentState {

}

@observer
class EmployeeComponent extends React.Component<EmployeeComponentProps, EmployeeComponentState> {
  render() {
    const { hours_worked, name } = this.props.employee;

    return <div>
      <p>{`Name: ${name}`}</p>
      <p>{`hours worked: ${hours_worked}`}</p>
    </div>
  }
}

export { EmployeeComponent }