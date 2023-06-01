import { View, Text } from "react-native";
import useTheme from "../useTheme";

export const MessagesScreen = () => {
  const Styles = useTheme();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Liste des message</Text>
    </View>
  );
};
