import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  FlatList,
  SafeAreaView
} from "react-native";

const CareerDevelopment = ({navigation}) => {
  return( 
      <SafeAreaView>
  <View style={styles.container}>
  <Text
          style={styles.navText}
          onPress={() => navigation.navigate("Profile")}
        >
          Profile
        </Text>
      <Text style={styles.h1}>Career Development</Text>

      
        <Text style={styles.h1}>Front-End Developer</Text> 
        <Text style={styles.h1}>Bitwise Industries, AlphaWorks</Text>
        
        <Text style={{fontSize:16}}>Sep 2021-Current</Text>
<FlatList 
        data={[
          {key: 'Developed UI workflows and wireframes'},
          {key: 'Built feature templates in React and React-native '},
          {key: 'Collaborated with QA, and design teammates to build ,test, and maintain responsive applications'},
          {key: 'Worked on frontend -JavaScript based web applications'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      /> 
</View>
</SafeAreaView>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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

export default CareerDevelopment;
