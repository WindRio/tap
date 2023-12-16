import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "../layout";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Layout"
          component={Layout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
