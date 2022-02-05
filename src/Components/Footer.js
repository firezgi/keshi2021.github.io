import React from 'react';
import { Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

function Footer({navigation,setPage}) {

  return (
    <SafeAreaView>
    <View style={styles.container}>
    
        <Text style={styles.navtext} style={styles.navtext}>1501 almaden expressway apt 6153 San Jose,CA 95125</Text>
  
        
          <Text style={styles.navtext}>(832)206-8163</Text> 
          <Pressable onPress={() => setPage("ContactHabteab")}>          
            <View>
              <Text style={styles.navtext}>keshi2017@gmail.com</Text>
            </View>
          
        </Pressable>
        
  </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      display:"flex",
      backgroundColor: "#063970",
      alignItems: "center",
      justifyContent: "space-around",
      padding:10,
    },
    h1: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    navtext:{
        color:'white'
    
      },
    h2: {
        fontSize: 16
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
export default Footer;
