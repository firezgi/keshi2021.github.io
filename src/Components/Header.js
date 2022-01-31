import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable
} from "react-native";
function Header({ setPage }) {
  
  return (
    < View style={styles.container}>

        <Pressable onPress={() => setPage("Profile")}>
            <Text style={styles.navtext}>Habteab</Text>          
        </Pressable>     
        
          <Pressable onPress={() => setPage("Profile")}>
            <Text style={styles.navtext} name="Profile">Profile</Text>
          </Pressable>
          <Pressable onPress={() => setPage("Portfolio")}>
            <Text style={styles.navtext} name="Portfolio">Portfolio</Text>
          </Pressable>
          <Pressable onPress={() => setPage("CareerDevelopment")}>
            <Text style={styles.navtext} name="CareerDevelopment">Career</Text>
          </Pressable>
          <Pressable onPress={() => setPage("Education")}>
            <Text style={styles.navtext}name="Education">Education</Text>
          </Pressable>
          <Pressable onPress={() => setPage("ContactHabteab")}>
            <Text style={styles.navtext} name="">Contact</Text>
          </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#063970",
    alignItems: "center",
    flexDirection:"row",
    justifyContent: "space-around",
    marginTop:20,
    height:50
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  navtext:{
    color:'white'

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
export default Header;
