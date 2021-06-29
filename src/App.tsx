import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PropTypes } from 'mobx-react';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <p>hi</p>
      </div>
    );
  }
}

export default App;
