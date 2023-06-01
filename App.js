import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useTheme from "./useTheme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Colors = useTheme();

  const styles = StyleSheet.create({
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

  const Tab = createBottomTabNavigator();

  const AccueilScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page d'accueil</Text>
      </View>
    );
  };

  const MessagesScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Liste des message</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.background} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: { backgroundColor: Colors.background },
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={AccueilScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarLabel: "Messages",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
