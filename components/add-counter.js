import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import plusBtn from "../assets/addBtnCart.png";
import minusBtn from "../assets/minusBtn.png";

const AddCounter = () => {
  const [counter, setCounter] = useState("0");

  const handleIncrement = () => {
    let numAdd = String(parseInt(counter) + 1);
    setCounter(numAdd);
  };

  const handleDecrement = () => {
    let addMinus = String(parseInt(counter) - 1);
    setCounter(addMinus);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <Image source={minusBtn} />
      </TouchableOpacity>

      <TextInput
        style={styles.textCounter}
        keyboardType="numeric"
        value={counter}
        onChange={(e) => setCounter(e.target.value)}
      />

      <TouchableOpacity onPress={handleIncrement}>
        <Image source={plusBtn} />
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
    fontSize: 34,
    fontWeight: "700",
  },
});

export default AddCounter;
