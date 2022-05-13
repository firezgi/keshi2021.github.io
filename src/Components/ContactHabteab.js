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
            require("../images/codeBright.jpg")
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
            placeholderTextColor="white"
          />
        </View>

        <View>
          <Text style={styles.h3}>Subject*</Text>
          <TextInput
            style={styles.input}
              onChangeText={text => setSubject(text)}
              value={subject}
            placeholder="Insert Subject!"
            placeholderTextColor="white"
          />
        </View>

        <View>
          <Text style={styles.h3} htmlFor="name">Your Message</Text>
          <TextInput
            style={styles.input1}
              onChangeText={text => setMessage(text)}
            value={message}
            placeholder="Type your Message!"
            placeholderTextColor="white"
            numberOfLines={8}
            multiline={true}
          />
        </View>
        <View style={styles.buttonContainer}>
        <Pressable onPress={sendContactForm}>
          <View style={styles.btn}>
            <Text style={{color:"#b9bf08"}}>Submit</Text>
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
    color:"#b9bf08",
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color:"#b9bf08",
    backgroundColor:"#020f4d",
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
    borderColor: "#b9bf08",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
    color:"white",
    backgroundColor:"#343436"
  },
  input1: {
    width: 300,
    borderColor: "#b9bf08",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
    color:"white",
    backgroundColor:"#343436"
},
btn:{
    padding:10,
    borderColor:"black",
    backgroundColor:"#020f4d",
    borderRadius:10,
    margin:5,
    color:'#b9bf08',
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
