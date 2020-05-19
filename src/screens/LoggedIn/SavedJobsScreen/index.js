import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import { Card, Button } from "react-native-elements";
import MapView from "react-native-maps";
import * as WebBrowser from "expo-web-browser";
import { connect } from "react-redux";

import { logOut, resetSavedJobs } from "../../../redux/actions";
import { screenHeigth, screenWidth } from "../../../constants/dimensions";

class SavedJobsScreen extends Component {
  renderLikedJobs() {
    return this.props.savedJobs.map((job) => (
      <View style={{ marginVertical: screenHeigth * 0.02 }}>
        <Card title={job.jobtitle} key={job.jobkey}>
          <View
            style={{
              height: screenHeigth * 0.3,
            }}
          >
            <MapView
              cacheEnabled={false}
              scrollEnabled={false}
              style={{ height: screenHeigth * 0.2 }}
              initialRegion={{
                latitude: job.latitude,
                longitude: job.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply now"
              backgroundColor="#03A9F4"
              onPress={() => {
                WebBrowser.openBrowserAsync(job.url);
              }}
            />
          </View>
        </Card>
      </View>
    ));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="lightgrey" />
        <ScrollView
          style={{ width: screenWidth * 0.9 }}
          showsVerticalScrollIndicator={false}
        >
          {this.renderLikedJobs()}
        </ScrollView>
      </SafeAreaView>
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
  detailWrapper: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  italics: {
    fontStyle: "italic",
  },
});

const mapStateToProps = (state) => state.jobsData;

export default connect(mapStateToProps, { logOut, resetSavedJobs })(
  SavedJobsScreen
);
