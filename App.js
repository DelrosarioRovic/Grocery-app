import { View, StyleSheet, Text } from "react-native";
import Route from "./routes/homeStack";
//import font
import poppinsBold from "./assets/fonts/Poppins-Bold.otf";
import poppinsLight from "./assets/fonts/Poppins-Light.otf";
import poppinsRegular from "./assets/fonts/Poppins-Regular.otf";
import poppinsSemiBold from "./assets/fonts/Poppins-SemiBold.otf";
//redux
import { Provider } from "react-redux";
import { makeStore } from "./redux/store";

//import for new font
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-bold": poppinsBold,
    "poppins-light": poppinsLight,
    "poppins-regular": poppinsRegular,
    "poppins-semi-bold": poppinsSemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Fonts are loaded!");
      await SplashScreen.hideAsync();
      console.log("Splash screen is hidden!");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const store = makeStore();
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <Route />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
