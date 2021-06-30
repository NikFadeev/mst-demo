import { inject, observer } from 'mobx-react';
import React from 'react';
import { Root } from '../mst';

interface EmployerComponentProps {
  rootTree?: Root;
}

interface EmployerComponentState {

}

@inject('rootTree')
@observer
class EmployerComponent extends React.Component<EmployerComponentProps, EmployerComponentState> {
  constructor(props: EmployerComponentProps) {
    super(props);
    this.state = {}
  }

  render() {
    const { rootTree } = this.props;

    if (!rootTree) return null;

    return <div>
      <h1>{rootTree.employer.name}</h1>
      <div>{rootTree.employer.location}</div>
    </div>
  }
}

export { EmployerComponent };