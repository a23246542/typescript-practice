import React from 'react';
import './App.css';
import { ProjectList } from './screens/project-list';
import Login from './screens/login';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <ProjectList /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
