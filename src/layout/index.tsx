import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Menu from "./menu";

export default function Layout(props: any) {
  const insets = useSafeAreaInsets();
  console.log("🚀 ~ file: index.tsx:9 ~ Layout ~ insets:", insets)
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
      }}
    >
      <Menu />
    </View>
  );
}
