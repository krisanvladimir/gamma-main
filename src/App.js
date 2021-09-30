import React from 'react';
import {DesktopState} from "./context/desktops/desktopState";
import {Dashboard} from "./containers/Dashboard";


function App() {

  return (
      <DesktopState>
        <Dashboard/>
      </DesktopState>
  );
}

export default App;
