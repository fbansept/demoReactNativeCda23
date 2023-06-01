import useTheme from "../useTheme";
import { View, Text } from "react-native";

export const AccueilScreen = () => {
  const Styles = useTheme();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Page d'accueil</Text>
    </View>
  );
};
