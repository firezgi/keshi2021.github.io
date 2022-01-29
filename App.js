import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CareerDevelopment from "./src/Components/CareerDevelopment";
import Portfolio from "./src/Components/Portfolio";
import Profile from "./src/Components/Profile";
import Education from "./src/Components/Education";
import { useState } from "react";
import Header from "./src/Components/Header";
import ContactHabteab from "./src/Components/ContactHabteab";
import Footer from "./src/Components/Footer";
import Home from "./src/Components/Home";

export default function App() {
  const [page, setPage] = useState("ContactHabteab");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header setPage={setPage} />
      {page === "Home" && <Home/>}
        {page === "Profile" && <Profile />}
        {page === "CareerDevelopment" && <CareerDevelopment />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Education" && <Education />}
        {page === "ContactHabteab" && <ContactHabteab />}
      
      <Footer setPage={setPage} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    width:"100%"
  },
});
