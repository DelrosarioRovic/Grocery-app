import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import cartInfoIcon from "../assets/cartLower.png";

const HomeCart = ({ navigation, totalCartItems }) => {
  const pressHandler = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={pressHandler}>
        <Image source={cartInfoIcon} />
        <View style={styles.cartNum}>
          <View style={styles.cartNumInside}>
            <Text style={{ color: "#ffffff" }}>{totalCartItems}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    margin: "auto",
    position: "relative",
    backgroundColor: "#23AA49",
    padding: 10,
    borderRadius: 30,
  },
  cartNum: {
    backgroundColor: "#ffffff",
    width: 25,
    height: 25,
    position: "absolute",
    padding: 1,
    borderRadius: 30,
    bottom: -10,
    left: 8,
  },
  cartNumInside: {
    backgroundColor: "#FF324B",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
