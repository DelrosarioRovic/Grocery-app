import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Route from "./routes/homeStack";

export default function App() {
  return (
    <View style={styles.container}>
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
