import * as React from 'react';
import './App.css';
import Shell from './shell/components/shell.component';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Shell></Shell>
      </div>
    );
  }
}

export default App;
