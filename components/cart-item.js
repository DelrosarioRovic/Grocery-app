import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import AddCounter from "./add-counter";
import { useDispatch } from "react-redux";
import { addQuantity, reduceQuantity } from "../redux/hooks/cart";

const CartItem = ({ title, kilo, price, quantity, id }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(reduceQuantity(id));
  };
  const handleIncrement = () => {
    dispatch(addQuantity(id));
  };
  const handleInputCounter = () => {
    dispatch(addQuantity(id));
  };
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descriptionText}>
          {kilo}kg, {price}$
        </Text>
      </View>
      <AddCounter
        counter={quantity}
        imgSize={{ width: 30, height: 30 }}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleInputCounter={handleInputCounter}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: wp(100),
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  descriptionText: {
    color: "#FF324B",
    paddingBottom: 5,
  },
});
