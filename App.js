import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CareerDevelopment from './src/Components/CareerDevelopment';
import Portofolio from './src/Components/Portofolio';
import Profile from "./src/Components/Profile";
import Education from "./src/Components/Education";
import { useState } from "react";
import Header from "./src/Components/Header";

export default function App() {
  const [page,setPage]=useState("Profile")
  return (

    <SafeAreaView style={styles.container}>
      <Header setPage={setPage}/>
       {page === "Profile" && <Profile />}
          {page === "CareerDevelopment" && <CareerDevelopment />}
          {page === "Portofolio" && <Portofolio/>}
          {page === "Education" && <Education/>}
      
      <StatusBar style="auto" /> 
      </SafeAreaView>
      
    
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
