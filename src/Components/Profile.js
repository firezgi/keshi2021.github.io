import { FontAwesome5 } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import Hab from "../images/hab.png";
function Profile() {
  const window = useWindowDimensions();
  const breakpoint700 = 700;

  const profileImageObject = () => {
    const imgStyle = {
      width: 350,
      height: 532,
    };
    if (window.width > breakpoint700) {
      imgStyle.width *= 0.5;
      imgStyle.height *= 0.4;
      imgStyle.alignSelf = "flex-start";
    }
    return imgStyle;
  };

  const profileLayout =
    window.width > breakpoint700 ? { flexDirection: "row" } : {};

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
      <SafeAreaView style={styles.container1}>
        <Text style={styles.profileText}>Profile</Text>
        <View style={profileLayout}>
          <View style={{marginTop:window.width>breakpoint700?0:-100,marginLeft:window.width>breakpoint700?10:null,alignSelf:window.width<breakpoint700?"center":null}}>
            <Image
              source={Hab}
              resizeMode="contain"
              style={profileImageObject()}
            />
          </View>
          <View style={{ overflowWrap: "break-word", width: "80%",backgroundColor:"#343436",marginTop:window.width <breakpoint700?-100:30,marginLeft:1,marginLeft:window.width <breakpoint700?0:2,alignSelf:window.width <breakpoint700?"center":null }}>
            <Text style={styles.h1}>Personal Summary</Text>
            <Text style={styles.h2}>
              Dynamic and passionate front-end web developer with experience in
              building responsive websites and mobile applications.Possesses a
              strong work ethic and the ability to adapt to ever-changing
              environments. Effective collaboration skills, team building
              capabilities, and leadership in diverse and complex operations.
              Education as well as experience in comprehensive problem solving,
              creative troubleshooting, and complex project management.
            </Text>
          </View>
        </View>
        <View 
        // style={styles.textContainer}
        style={{alignSelf: "center",
        backgroundColor:"#343436",
        alignContent:"center",
        marginTop:5,
        overflowWrap: "break-word",width:"80%"}}
        >
        <Text style={styles.h1}>Core Qualifications</Text>
        <View style={{alignSelf: "center",
    backgroundColor:"#343436",
    alignContent:"center",
    marginTop:5,
    overflowWrap: "break-word"}}>
        <FlatList
          data={[
            { key: "Excellent organization and presentation skills" },
            {
              key: "Good experience with Windows, Linux, and MAC operating systems",
            },
            { key: "Strong knowledge of Microsoft Office suite" },
            {
              key: "Outstanding knowledge of web programming skills including:",
            },
            { key: "    -React                      -React Native" },
            { key: "    -CSS                        -HTML" },
            { key: "    -JavaScript               -Node.js" },
            { key: "    -Bootstrap                -Agile/scrum" },
            { key: "    -git-hub                    -wordPress" },
            {
              key: "Profound creative and analytical problem-solving skills",
            },
            { key: "Strong verbal and written communication skills" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
        </View>
      </SafeAreaView>

      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
    // flexWrap:"wrap",
    // padding:10
  },
  profileText: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "center",
    color: "#6df7de",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#6df7de",
    marginBottom:5
  },
  h2: {
    fontSize: 18,
    marginStart: 10,
    paddingEnd: 20,
    color: "#6df7de",
  },
  bold: {
    fontWeight: "bold",
  },
  p: {
    marginBottom: 20,
  },
  profileImage: {
    width: "400px",
    height: "608px",
    maxWidth: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: "#6df7de",
  },
  img: {
    marginStart: 10,
    borderRadius:20
  },
});

export default Profile;
