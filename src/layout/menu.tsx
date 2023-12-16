import React from "react";
import { Drawer } from "react-native-drawer-layout";
import {
  Text,
  Button,
  ButtonText,
  View,
  Box,
  HStack,
  Input,
  InputField,
  KeyboardAvoidingView,
  VStack,
} from "@gluestack-ui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Child from "../components/child";
import Home from "../components/home";

export default function Menu() {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  const [open, setOpen] = React.useState(false);

  const onNavigate = (page: string) => {
    navigation.navigate(page)
    setOpen(false)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ width: "100%", height: "100%", paddingTop: 30 }}
      >
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          renderDrawerContent={() => {
            return (
              <VStack>
                <Button onPress={() => onNavigate('Home')}>
                  <ButtonText>Home</ButtonText>
                </Button>
                <Button onPress={() => onNavigate('Child')}>
                  <ButtonText>Child</ButtonText>
                </Button>
              </VStack>
            );
          }}
        >
          <Box bg="$emerald800" p="$5">
            <HStack space="xl" reversed={false}>
              <Button bg="$amber200" onPress={() => setOpen(true)}>
                <ButtonText size="xs">Add</ButtonText>
              </Button>
              <Input
                variant="outline"
                size="md"
                style={{ width: "60%" }}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="Enter Text here" />
              </Input>
            </HStack>
          </Box>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Child"
              component={Child}
            />
          </Stack.Navigator>
        </Drawer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
