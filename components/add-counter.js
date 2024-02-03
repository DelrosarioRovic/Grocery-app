import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import plusBtn from "../assets/addBtnCart.png";
import minusBtn from "../assets/minusBtn.png";

const AddCounter = ({
  imgSize,
  counter,
  handleIncrement,
  handleDecrement,
  handleInputCounter,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <Image source={minusBtn} style={imgSize} />
      </TouchableOpacity>

      <TextInput
        style={styles.textCounter}
        keyboardType="numeric"
        value={counter}
        onChange={handleInputCounter}
      />

      <TouchableOpacity onPress={handleIncrement}>
        <Image source={plusBtn} style={imgSize} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    gap: 20,
  },
  textCounter: {
    fontSize: 25,
    fontWeight: "700",
  },
});

export default AddCounter;
