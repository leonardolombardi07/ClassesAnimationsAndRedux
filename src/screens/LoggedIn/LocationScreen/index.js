import React, { Component } from "react";
import { StyleSheet, Button, View } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";

import { fetchJobs } from "../../../redux/actions";
import { screenWidth, screenHeigth } from "../../../constants/dimensions";

class LocationScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region: region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapContainer}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button title="Search this area" onPress={this.onButtonPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: screenHeigth * 0.05,
    width: screenWidth * 0.9,
  },
});

export default connect(null, { fetchJobs })(LocationScreen);
