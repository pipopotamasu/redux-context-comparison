import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classes from './styles/app.module.css';
import ReduxExample from './pages/ReduxExample';
import ContextExample from './pages/ContextExample';

function App() {
  return (
    <Router>
      <div className={classes.app}>
        <nav className={classes.nav}>
          <p><Link to="/redux">Redux Sample</Link></p>
          <p><Link to="/context">Context Sample</Link></p>
        </nav>
        <Route exact path='/redux' component={ReduxExample}/>
        <Route exact path='/context' component={ContextExample}/>
      </div>
    </Router>
  );
}

export default App;
