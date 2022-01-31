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
} from "react-native";

function ContactHabteab() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendContactForm = () => {
    let mailto = `mailto:keshi2017@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `& body=${message}`;
    Linking.openURL(mailto)
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
            numberOfLines={6}
            multiline={true}
          />
        </View>
        <Pressable onPress={sendContactForm}>
          <View>
            <Text style={styles.btn}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abaec4",
    alignItems: "center",
    paddingBottom:200,
    paddingTop:20
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h3: {
    fontSize: 16,
    // fontWeight: "bold",
    marginTop: 10,
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
    borderColor: "#063970",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
  },
  input1: {
    width: 300,
    borderColor: "#063970",
    borderWidth: 1,
    borderRadius:5,
    padding: 5,
    color:"black"
},
btn:{
    padding:10,
    borderColor:"black",
    backgroundColor:"#063970",
    borderRadius:10,
    margin:5,
    color:'white',
    marginTop:10
}

});
export default ContactHabteab;
