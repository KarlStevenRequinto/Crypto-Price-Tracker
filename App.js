import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, Text } from "react-native";

import CoinListScreen from "./src/screens/CoinListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinListScreen />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
