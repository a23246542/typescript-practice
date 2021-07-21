import React from 'react';
import './App.css';
import { ProjectList } from './screens/project-list';

function App() {
  let a = 'xxx';
      console.log(a);

  return (
    <div className="App" ><header className="App-header">
      <ProjectList />
    </header>
    </div>
  );
}

export default App;
