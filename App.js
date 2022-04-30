import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import CareerDevelopment from "./src/Components/CareerDevelopment";
import Portfolio from "./src/Components/Portfolio";
import Profile from "./src/Components/Profile";
import Education from "./src/Components/Education";
import { useState } from "react";
import Header from "./src/Components/Header";
import ContactHabteab from "./src/Components/ContactHabteab";
import Footer from "./src/Components/Footer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function App() {
  const window = useWindowDimensions();
  const breakpoint400 = 500;
  const [page, setPage] = useState("Profile");
  return (
    <ImageBackground
    resizeMode={"stretch"}
    style={styles.container}
    source={
      Platform.OS === "web"
        ? require("./src/images/dark.jpg")
        : require("./src/images/dark.jpg")
    }
  >
    {window.width > breakpoint400 ?
      <View>
        <Header setPage={setPage} />
        {page === "Profile" && <Profile />}
        {page === "CareerDevelopment" && <CareerDevelopment />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Education" && <Education />}
        {page === "ContactHabteab" && <ContactHabteab />}
          
          <Footer setPage={setPage} style={styles.footer} />
        </View>
       : (<>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Profile">
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Career" component={CareerDevelopment} />
          <Drawer.Screen name="Portfolio" component={Portfolio} />
          <Drawer.Screen name="Education" component={Education} />
          <Drawer.Screen name="Contact" component={ContactHabteab} />
        </Drawer.Navigator>
      </NavigationContainer>
          <Footer setPage={setPage} />
          </>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
});
