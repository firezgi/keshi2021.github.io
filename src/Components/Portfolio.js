import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import Trivia from "../images/Trivia-chill.png";
import Haunted from "../images/HountedHouseGame.png";
import Decidr from "../images/Decidr.png";
import ECard from "../images/E-Card.png";
import MarvelSpace from "../images/marvelMobile.png";
import { FontAwesome5 } from "@expo/vector-icons";
function Portfolio() {
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
        <View style={styles.container}>
          <Text style={styles.h1}>Projects</Text>
          <View>
            <View>
              <View style={styles.projectContainer}>
                <Image style={styles.img} source={Trivia} />
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.h2}>Trivia and Chill 2022/</Text>
                  </View>
                  <View>
                    <Text style={styles.h3}>
                      Implemented Redux in React-Native for both web and mobile
                    </Text>
                    <Text style={styles.h3}>
                      Develop a game with my teammates and touch every component{" "}
                    </Text>
                    <Text style={styles.h3}>
                      The project was managed with github and git flow using
                      agile methodology
                    </Text>
                    <Text style={styles.h3}>
                      Designed the project with lunacy
                    </Text>
                  </View>
                  <View style={styles.linkContainer}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="github"
                        size={24}
                        onPress={() => Linking.openURL("https://github.com/luceroweb/trivia-and-chill")}
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("https://luceroweb.github.io/trivia-and-chill/")}
                      >
                        <Text>Live</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.projectContainer}>
                <Image style={styles.img} source={Haunted} />
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.h2}>The Hounted House Game 2021/</Text>
                  </View>
                  <View>
                    <Text style={styles.h3}>Implemented react.js</Text>
                    <Text style={styles.h3}>
                      Developed a Halloween game with my teammates and touch
                      every component
                    </Text>
                    <Text style={styles.h3}>
                      Used agile methodology to manage the project
                    </Text>
                    <Text style={styles.h3}>
                      Collaborated with QA team mates to test the responsive
                      application{" "}
                    </Text>
                    <Text style={styles.h3}>
                      Designed the project with lunacy
                    </Text>
                  </View>

                  <View style={styles.linkContainer}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="github"
                        size={24}
                        onPress={() => Linking.openURL("https://github.com/keshi2021/haunted-house-game")}
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("http://luceroweb.github.io/haunted-house-game/")}
                      >
                        <Text>Live</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.projectContainer}>
                <Image source={MarvelSpace} style={styles.img1} alt="..." />
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.h2}>Marvel Space 2021/</Text>
                  </View>
                  <View>
                    <Text style={styles.h3}>
                      Written in React-Native, using React-Native components for
                      web and mobile
                    </Text>
                    <Text style={styles.h3}>Used wordpress for backend</Text>
                    <Text style={styles.h3}>
                      Used agile methodology to manage the project
                    </Text>
                    <Text style={styles.h3}>
                      Work as a team lead and take part in all aspects of the
                      project
                    </Text>
                    <Text style={styles.h3}>
                      Collaborated with security team mates to test the
                      responsive application
                    </Text>
                  </View>

                  <View style={styles.linkContainer}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="github"
                        size={24}
                        onPress={() => Linking.openURL("https://github.com/keshi2021/team-spider-man")}
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("http://keshi2021.github.io/team-spider-man")}
                      >
                        <Text>Live</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.projectContainer}>
                <Image style={styles.img} source={Decidr} alt="..." />
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.h2}>Decidr 2021/</Text>
                  </View>
                  <View>
                    <Text style={styles.h3}>
                      A web and mobile application written in React.js
                    </Text>
                    <Text style={styles.h3}>
                      Individual project and help users make decisions{" "}
                    </Text>
                  </View>

                  <View style={styles.linkContainer}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="github"
                        size={24}
                        onPress={() => Linking.openURL("https://github.com/keshi2021/decidr")}
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("https://keshi2021.github.io/decidr")}
                      >
                        <Text>Live</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.projectContainer}>
                <Image style={styles.img} source={ECard} />
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.h2}>E-Card 2021/</Text>
                  </View>
                  <View>
                    <Text style={styles.h3}>
                      A web and mobile application written in React.js
                    </Text>
                    <Text style={styles.h3}>
                      Individual project and help users to share a custom
                      greeting card{" "}
                    </Text>
                    <Text style={styles.h3}>
                      Used mailto to share the card through email
                    </Text>
                  </View>
                  <View style={styles.linkContainer}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="github"
                        size={24}
                        onPress={() => Linking.openURL("https://github.com/keshi2021/ecard")}
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("https://keshi2021.github.io/ecard")}
                      >
                        <Text>Live</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#343436",
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 2,
  },
  h1: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6df7de",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6df7de",
    paddingLeft: 10,
  },
  h3: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#6df7de",
  },
  p: {
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
    maxWidth: "100%",
    alignSelf: "center",
  },
  img1: {
    width: 350,
    height: 750,
    maxWidth: "100%",
    alignSelf: "center",
  },
  projectContainer: {
    maxWidth: "100%",
    alignSelf: "center",
  },
  text: {
    color: "#6df7de",
  },
  iconContainer: {
    backgroundColor: "#6df7de",
    // flexDirection:"row",
    // justifyContent:"center",
    alignContainer:"center",
    padding:2,
    borderRadius: 10,
  },
  linkContainer: {
    // backgroundColor: "#6df7de",
    flexDirection: "row",
    width:"50%",
    justifyContent:'space-around',
    // alignItems:"stretch"
    padding: 2,
    borderRadius: 10,
  },
});

export default Portfolio;
