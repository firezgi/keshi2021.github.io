import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Education() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    
        <Text style={styles.h1}>Education</Text>
  
        
          <Text style={styles.h2}>Asmara university</Text> 
          <Text style={styles.h2}>Asmara,Eritrea- Sep 1997 to Jul 2001:</Text>          
          <Text style={{fontSize:16,paddingBottom:30}}>Bachelors of Arts in Economics and Finance</Text>


          <Text style={styles.h2}>De Anza College</Text> 
          <Text style={styles.h2}>Cupertino,CA- October 2017 to July 2019:</Text>          
          <Text style={{fontSize:16,paddingBottom:30}}>Pursued Associated degree in Computer science</Text>


          <Text style={styles.h2}>Evangadi Networks</Text> 
          <Text style={styles.h2}>Feb2021 to Aug2021:</Text>          
          <Text style={{fontSize:16}}>Bachelors of Arts in Economics and Finance</Text>
  
  </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#abaec4",
      alignItems: "center",
      paddingBottom:120,
      paddingTop:20,
      paddingStart:10
    },
    h1: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    h2: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
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
export default Education;
