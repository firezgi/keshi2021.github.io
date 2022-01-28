import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CareerDevelopment from './src/Components/CareerDevelopment';
import Portofolio from './src/Components/Portofolio';
import Profile from "./src/Components/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CareerDevelopment" component={CareerDevelopment} />
      <Stack.Screen name="Portofolio" component={Portofolio} />
      <Stack.Screen name="ContactHabteab" component={ContactHabteab} />

      </Stack.Navigator>  
      </NavigationContainer>  
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
