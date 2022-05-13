import React from "react";
import { ScrollView,FlatList, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View, Linking,TouchableOpacity } from "react-native";
function Education() {
  return (
    <ImageBackground
        resizeMode={"stretch"}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        source={
          Platform.OS === "web"
            ? require("../images/codeBright.jpg")
            : require("../images/dark.jpg")
        }
      >
        <ScrollView>
    <SafeAreaView style={styles.container}>
      <View>       
        <View style={styles.textContainer1}>
        <Text style={styles.h1}>Education</Text>
        </View>        
        <View style={styles.textContainer}>
        <Text style={styles.h2}>Asmara university</Text>
        <Text style={styles.h3}>Asmara,Eritrea  Sep 1997 to Jul 2001:</Text>
        <Text style={styles.h4}>
          Bachelors of Arts in Economics and Finance
        </Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.h2}>De Anza College</Text>
        <Text style={styles.h3}>Cupertino,CA  October 2017 to July 2019:</Text>
        <Text style={styles.h4}>
          Pursued Associated degree in Computer science
        </Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.h2}>Evangadi Networks</Text>
        <Text style={styles.h3}>San Jose,CA  Feb 2021 to Aug 2021:</Text>
        <Text style={styles.h4}>
          Full Stack Web Development Boot Camp
        </Text>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
</ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 120,
    paddingTop: 20,
    paddingStart: 10,
    flex: 1,
  },

  textContainer:{
    backgroundColor:"#020f4d",
    borderRadius:5,
    marginBottom:10,
    padding:15,
    alignItems: "center",
  },

  textContainer1:{
    borderRadius:5,
    marginBottom:10,
    padding:15,
    alignItems: "center",
  },
  h1: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
    color:"#b9bf08",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color:"#b9bf08",
    paddingLeft:10
  },
  h3:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color:"#b9bf08",
  },
  h4:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color:"#b9bf08",
    paddingBottom:30
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
export default Education;
