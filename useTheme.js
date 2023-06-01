import { StyleSheet, useColorScheme } from "react-native";

const couleurCommune = {
  primary: "#669999",
  secondary: "#AA6C39",
  white: "#FFF",
  black: "#000",
};

const Colors = {
  light: {
    ...couleurCommune,
    background: "#FFF",
    textColor: couleurCommune.black,
  },
  dark: {
    ...couleurCommune,
    background: "#111",
    textColor: couleurCommune.white,
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.textColor,
  },
});

export default useTheme = () => {
  return { ...styles, ...Colors[useColorScheme()] };
};
