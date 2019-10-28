import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home'
import Hook from './Pages/Hook'
import MockRedux from './Pages/mockRedux/mr'
import useMemo from './Pages/useMemo'

const Rank = (props) => {
  props = {
    'key1':'value1',
    'key2':'value2',
    'key3':'value3',
  }
  return (
      <Hook {...props} />
  )
};

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/123">列表</Link> </li>
            <li><Link to="/hook">HOOK</Link> </li>
            <li><Link to="/mockredux">MockRedux</Link> </li>
            <li><Link to="/usememo">useMemo</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/:aa" component={List} />
        <Route path="/home/" component={Home} />
        <Route path="/hook" component={Rank} />
        <Route path="/mockredux" component={MockRedux} />
        <Route path="/usememo" component={useMemo} />
        
    </Router>
  );
}
export default AppRouter;