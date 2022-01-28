import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
  ScrollView 
} from "react-native";

import Hab from "../images/hab.png";
function Profile() {
  const window = useWindowDimensions();
  const breakpoint700 = 700;
  const profileImageObject = () => {
    const imgStyle = {
      width: 500,
      height: 760,
    };
    if (window.width > breakpoint700) {
      imgStyle.width *= 0.5;
      imgStyle.height *= 0.5;
      imgStyle.alignSelf = "flex-start";
    }
    return imgStyle;
  };
  const profileLayout =
    window.width > breakpoint700 ? { flexDirection: "row" } : {};

    
  return (
    <SafeAreaView>
      <ScrollView>
      
    <View style={(styles.container, profileLayout)}>
      <View>
        <Image source={Hab} resizeMode="contain" style={profileImageObject()} />
      </View>
      <View style={{ overflowWrap: "break-word", width: "50%" }}>
        <Text style={styles.h1}>Profile</Text>
        <Text style={styles.h1}>Personal Summary</Text>
        <Text style={{fontSize:18}}>
          Dynamic and passionate front-end web developer with experience in
          building responsive websites and mobile applications. Possesses a
          strong work ethic and the ability to adapt to ever-changing
          environments. Effective collaboration skills, team building
          capabilities, and leadership in diverse and complex operations.
          Education as well as experience in comprehensive problem solving,
          creative troubleshooting, and complex project management.
        </Text>
        </View>
        </View>
        <Text style={styles.h1}>Core Qualifications</Text>
        <FlatList style={styles.h1}
        data={[
          {key: 'Excellent organization and presentation skills'},
          {key: 'Good experience with Windows, Linux, and MAC operating systems'},
          {key: 'Strong knowledge of Microsoft Office suite'},
          {key: 'Outstanding knowledge of web programming skills including:'},
          {key: '  -React                   -React Native'},
          {key: '  -CSS                     -HTML'},
          {key: '  -JavaScript              -Node.js'},
          {key: '  -Bootstrap               -Agile/scrum'},
          {key: '  -git-hub                 -wordPress'},
          {key: 'Profound creative and analytical problem-solving and troubleshooting skills'},
          {key: 'Strong verbal and written communication skills'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      /> 
        
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexWrap:"wrap",
    padding:10
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
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

export default Profile;
