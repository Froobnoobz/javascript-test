import React from 'react';
import PageRouterRenderer from './components/router/page-router-renderer';
import './App.scss';


function App() {
  return (
    <div className="App">
      {/* Too be honest, not entirely sure how to do proper routing in react
      So my solution has been to have the Router Switch in its own components
      And Lists from other components will change the route causing a route change */}
      <PageRouterRenderer></PageRouterRenderer>
    </div>
  );
}

export default App;
