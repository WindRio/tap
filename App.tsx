import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Route from "./src/router";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <Route />
      </SafeAreaProvider>
    </GluestackUIProvider>
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
