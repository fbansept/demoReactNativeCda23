import { useColorScheme } from "react-native";

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

export default useTheme = () => {
  return Colors[useColorScheme()];
};
