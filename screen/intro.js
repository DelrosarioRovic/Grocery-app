import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import carrotIntro from "../assets/carrot-intro.png";
import fruitsImg from "../assets/fruit.jpeg";

const Intro = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          source={carrotIntro}
          alt="carrot"
          style={styles.carrotImg1}
          blurRadius={100}
        />
        <Image
          source={carrotIntro}
          alt="carrot"
          style={styles.carrotImg2}
          blurRadius={30}
        />
        <Image
          source={carrotIntro}
          alt="carrot"
          style={styles.carrotImg3}
          blurRadius={50}
        />
        <View style={styles.carrotContainer}>
          <Image source={carrotIntro} alt="carrot" style={styles.carrotImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            Get your groceries delivered to your home
          </Text>
          <Text style={styles.textDescription}>
            The best delivery app in town for delivering your daily fresh
            groceries
          </Text>
        </View>
        <View style={styles.showBtnContainer}>
          <TouchableOpacity style={styles.shopNowBtn} onPress={pressHandler}>
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Image source={fruitsImg} style={styles.lowerImg} alt="fruitimage" />
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
  carrotContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    alignContent: "center",
    padding: 5,
  },
  carrotImg: {
    width: 80,
    height: 80,
  },
  carrotImg1: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 60,
    transform: [{ rotate: "-10deg" }],
  },
  carrotImg2: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 30,
    left: 10,
    transform: [{ rotate: "-120deg" }],
  },
  carrotImg3: {
    width: 60,
    height: 60,
    position: "absolute",
    right: 0,
    bottom: 10,
    transform: [{ rotate: "10deg" }],
  },

  upperContainer: {
    position: "relative",
    height: "55%",
    paddingVertical: 20,
    overflow: "hidden",
  },
  textContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  textTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  textDescription: {
    textAlign: "center",
    fontSize: 20,
    color: "#B4B4B4",
  },
  shopNowBtn: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#009959",
    width: 150,
    paddingVertical: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  showBtnContainer: {
    marginTop: 25,
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  lowerContainer: {
    height: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerImg: {
    width: "100%",
    height: "100%",
  },
});

export default Intro;
