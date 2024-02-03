import { StyleSheet, View, TextInput, Image } from "react-native";
import plusBtn from "../assets/addBtn.png";
import minusBtn from "../assets/minusBtn.png";

const AddCounter = () => {
  return (
    <View style={styles.container}>
      <Image source={minusBtn} />
      <TextInput placeholder="0" value="0" />
      <Image source={plusBtn} />
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
  },
});

export default AddCounter;
