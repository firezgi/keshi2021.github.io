import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Linking,
  Platform,
  ImageBackground,
} from "react-native";

function ContactHabteab() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendContactForm = () => {
    let mailto = `mailto:keshi2017@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `&body=${message}`;
    Linking.openURL(mailto)
  };

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
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Contact Habteab</Text>

        <View>
          <Text style={styles.h3}>Your Name*</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setName(e)}
            value={name}
            placeholder="Insert your Name!"
          />
        </View>

        <View>
          <Text style={styles.h3}>Subject*</Text>
          <TextInput
            style={styles.input}
              onChangeText={text => setSubject(text)}
              value={subject}
            placeholder="Insert Subject!"
          />
        </View>

        <View>
          <Text style={styles.h3} htmlFor="name">Your Message</Text>
          <TextInput
            style={styles.input1}
              onChangeText={text => setMessage(text)}
            value={message}
            placeholder="Type your Message!"
            numberOfLines={12}
            multiline={true}
          />
        </View>
        <View style={styles.buttonContainer}>
        <Pressable onPress={sendContactForm}>
          <View style={styles.btn}>
            <Text>Submit</Text>
          </View>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom:200,
    paddingTop:20,
    paddingStart: 10,
  },
  h1: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color:"#6df7de",
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color:"#6df7de",
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
  input: {
    height: 40,
    width: 300,
    borderColor: "#6df7de",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
    color:"white",
    backgroundColor:"#343436"
  },
  input1: {
    width: 300,
    borderColor: "#6df7de",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
    color:"#6df7de",
    backgroundColor:"#343436"
},
btn:{
    padding:10,
    borderColor:"black",
    backgroundColor:"#6df7de",
    borderRadius:10,
    margin:5,
    color:'white',
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
    width:"80%"
},
buttonContainer:{
  alignItems:"center"
}

});
export default ContactHabteab;
