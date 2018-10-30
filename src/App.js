import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './Container/Auth/Auth'
import Logout from './Container/Auth/Logout/Logout'
import Layout from './hoc/Layout/Layout';
import CheckOut from './Container/Checkout/Checkout';
import Recipe from './Component/Recipes/Recipes'


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/layout" component={Layout} />
          <Route path="/logout" component={Logout} />
          <Route path='/checkout' component={CheckOut}/>
          <Route path='/recipe' component={Recipe}/>
          <Redirect to="/layout" />
        </Switch>
      );
    }
    return (
      <div>
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter( connect( mapStateToProps, null )( App ) );
