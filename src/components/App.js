var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Popular = require('./Popular');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results')

require('../index.css');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/battle' component={Battle} exact/>
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not found</p>
            }}/>
          </Switch>

        </div>
      </Router>
    )
  }
}

module.exports = App;