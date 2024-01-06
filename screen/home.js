import { View, StyleSheet } from "react-native";
import ProfileHome from "../components/profile-home";
import SearchHome from "../components/search-home";
import SliderCarousel from "../components/slider-carousel";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ProfileHome />
        <SearchHome />
        <SliderCarousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "col",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  topContainer: {
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});

export default Home;
