import React from 'react';
import './App.css';
import { setupRootStore } from './mst/setup';
import { Provider } from 'mobx-react';

interface Props {

}

interface State {
  rootTree: any;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rootTree: null
    };
  }

  componentDidMount = () => {
    const { rootTree } = setupRootStore();
    this.setState({ rootTree });
  }

  render() {
    const { rootTree } = this.state;
    if (rootTree) return null;

    return (
      <Provider rootTree={rootTree}>
        <div className="App">
          <p>hi</p>
        </div>
      </Provider>
    );
  }
}

export default App;
