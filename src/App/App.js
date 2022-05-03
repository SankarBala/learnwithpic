import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import routes from './routes';
import Fallback from './fallback.js';
import AuthController from './Controllers/AuthController';
import api from "./api";
import Cookies from "js-cookie";
import { connect } from 'react-redux';

const App = ({ dispatch }) => {

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      dispatch({ type: "token", payload: token });
      api().get(`/user/`)
        .then((res) => {
          dispatch({ type: "retrieve", payload: res.data });
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 401) {
              dispatch({ type: "loggout", payload: null });
            }
          } else {
            console.log("Network error");
          }
        });
    } else {
      dispatch({ type: "notLogged", payload: null });
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route) => {
            if (route.auth) {
              if (route.layout) {
                return (
                  <AuthController key={route.path} path={route.path} exact={route.exact}>
                    <route.layout pageName={route.name}>
                      <Suspense fallback={Fallback}>
                        <route.component />
                      </Suspense>
                    </route.layout>
                  </AuthController>
                )
              } else {
                return (
                  <AuthController key={route.path} path={route.path} exact={route.exact}>
                    <Suspense fallback={Fallback}>
                      <route.component />
                    </Suspense>
                  </AuthController>
                )
              }
            } else {
              if (route.layout) {
                return (
                  <Route key={route.path} exact={route.exact} path={route.path} component={() => {
                    return (
                      <route.layout pageName={route.name}>
                        <Suspense fallback={Fallback}>
                          <route.component />
                        </Suspense>
                      </route.layout>
                    )
                  }} />
                )
              } else {
                return (
                  <Route key={route.path} exact={route.exact} path={route.path} component={() => {
                    return (
                      <Suspense fallback={Fallback}>
                        <route.component />
                      </Suspense>
                    )
                  }} />
                )
              }
            }
          })}
        </Switch>
      </Router>
    </React.Fragment>
  )
}


const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(App);

