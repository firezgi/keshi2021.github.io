import React from "react";
import {
  Button,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

function Footer({ navigation, setPage }) {
  const window = useWindowDimensions();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: window.width > 650 ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <Text style={styles.navtext} style={styles.navtext}>
          1501 almaden expressway apt 6153 San Jose,CA 95125
        </Text>

        <Text style={styles.navtext}>(832)206-8163</Text>
        <Pressable onPress={() => setPage("ContactHabteab")}>
          <View>
            <Text style={styles.navtext}>keshi2017@gmail.com</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // flexDirection:Platform.OS==="web"?"row":"column"
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  navtext: {
    color: "white",
  },
  h2: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  p: {
    marginBottom: 20,
  },
  profileImage: {
    width: "500px",
    height: "760px",
    maxWidth: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default Footer;
