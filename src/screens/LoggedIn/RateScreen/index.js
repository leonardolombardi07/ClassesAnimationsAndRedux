import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";

import Swipe from "../../../components/Swipe";
import { screenHeigth } from "../../../constants/dimensions";
import { saveJob } from "../../../redux/actions";
import { jobList } from "./DataModel";
class RateScreen extends Component {
  renderCard(job) {
    return (
      <Card title={job.jobTitle}>
        <MapView
          scrollEnabled={false}
          cacheEnabled={false}
          style={styles.map}
          initialRegion={{
            latitude: job.latitude,
            longitude: job.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        ></MapView>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <View>
          <Text>{job.snippet}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          large={true}
          icon={{ name: "my-location", color: "white" }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate("LocationScreen")}
        />
      </Card>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swipe
          data={jobList}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={(job) => this.props.saveJob(job)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: screenHeigth * 0.6,
  },
});

const mapStateToProps = (state) => state.jobsData;

export default connect(mapStateToProps, { saveJob })(RateScreen);
