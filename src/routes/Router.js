import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect } from "react-redux";

import SplashScreen from "../screens/LoggedOut/SplashScreen";
import LoggedOutFlow from "./Navigators/LoggedOutFlow";
import LoggedInFlow from "./Navigators/LoggedInFlow";

class Router extends Component {
  render() {
    if (this.props.loadingToken) {
      return <SplashScreen />;
    } else if (!this.props.token) {
      return <LoggedOutFlow firstAccess={this.props.firstAccess} />;
    }

    return <LoggedInFlow />;
  }
}

const mapStateToProps = (state) => state.authData;

export default connect(mapStateToProps)(Router);
