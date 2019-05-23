import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from '../src/containers/login'
import App from '../src/pages'
import withRoot from '../withRoot';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});
class routing  extends React.Component {

    render(){
        return (
            <Router>
            <Switch>
              <Route exact path="/" component={App} />
              {/* <Route path="/login" component={Login} /> */}
              {/* <Route path="/contact" component={Contact} />
              <Route component={Notfound} /> */}
            </Switch>
        </Router>

        )
    }
}
   
export default withRoot(withStyles(styles)(routing));
