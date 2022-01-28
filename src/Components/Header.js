import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
// import { stylesMobile, stylesWeb } from "./Styles";
function Header({ setPage }) {
  // const { width } = useWindowDimensions();
  // const widthBreakpoint = 1050;
  // let styles;
  // if (width < widthBreakpoint) {
  //   styles = stylesMobile;
  // } else {
  //   styles = stylesWeb;
  // }
  return (
    <View >
      <View>
        <Pressable onPress={() => setPage("Profile")}>
          <View>
            <View>
              <Text>Hab</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View>
        <View >
          <Pressable onPress={() => setPage("Profile")}>
            <Text  name="Profile">
              Profile
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("Portofolio")}>
            <Text name="Portofolio">
            Portofolio
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("CareerDevelopment")}>
            <Text  name="CareerDevelopment">
            CareerDevelopment
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("Education")}>
            <Text  name="Education">
            Education
            </Text>
          </Pressable>
          
        </View>
      </View>
    </View>
  );
}
export default Header;