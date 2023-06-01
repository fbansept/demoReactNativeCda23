import { StatusBar } from "expo-status-bar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AccueilScreen } from "./ecrans/Accueil";
import { MessagesScreen } from "./ecrans/Message";
import useTheme from "./useTheme";

export default function App() {
  const Styles = useTheme();

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Styles.background} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Styles.primary,
          tabBarStyle: { backgroundColor: Styles.background },
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
