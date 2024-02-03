import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/cart-item";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CartScreen = () => {
  const allCart = useSelector((state) => state.cart.cardData);

  return (
    <View style={{ display: "flex", gap: 30 }}>
      {allCart.length > 0 ? (
        allCart.map((cart) => (
          <View
            key={cart.id}
            style={{ borderBottomWidth: 1, borderBlockColor: "#E5E1DA" }}
          >
            <CartItem
              id={cart.id}
              kilo={cart.kilo}
              price={cart.price}
              title={cart.title}
              quantity={cart.quantity}
            />
          </View>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Empty Cart</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    width: wp(100),
    height: hp(80),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
