import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";

const CareerDevelopment = () => {
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
          ? require("../images/dark.jpg")
          : require("../images/dark.jpg")
      }
    >
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.textContainer1}>
            <Text style={styles.h1}>Career Development</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.h2}>Front-End Developer</Text>
            <Text style={styles.h1}>Bitwise Industries, AlphaWorks</Text>
            <Text style={styles.h2}>Sep 2021-Current</Text>
          </View>
          <FlatList
            data={[
              { key: "Developed UI workflows and wireframes." },
              { key: "Built feature templates in React and React-native." },
              {
                key: "Collaborated with QA,security,word press and design teammates to build applications.",
              },
              { key: "Worked on frontend -JavaScript based web applications." },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.h2}>Accountant</Text>
            <Text style={styles.h1}>Eritrean Holy Trinity Church</Text>
            <Text style={styles.h2}>Jan 2017-Feb 2021</Text>
          </View>
          <FlatList
            data={[
              { key: "Created financial reports and managed a yearly budget." },
              { key: "Analyzed, examined, and interpreted account records. " },
              {
                key: "Performed process analysis and communicated recommendations to management.",
              },
              {
                key: "Process journal entries and perform accounting corrections to ensure accurate records.",
              },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
      </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 120,
    paddingTop: 20,
    paddingStart: 10,
    flex: 1,
  },

  textContainer: {
    backgroundColor: "#343436",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer1: {
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    alignItems: "center",
  },
  h1: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
    color: "#6df7de",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6df7de",
    paddingLeft: 10,
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6df7de",
  },
  item: {
    padding: 15,
    fontSize: 18,
    height: 44,
    backgroundColor: "#343436",
    borderRadius: 5,
    paddingLeft: 85,
    alignItems: "center",
    alignContent: "center",
    color: "#6df7de",
    height: 60,
  },
});

export default CareerDevelopment;
