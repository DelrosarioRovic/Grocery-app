import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/cart-item";

const CartScreen = () => {
  const allCart = useSelector((state) => state.cart.cardData);

  return (
    <View style={{ display: "flex", gap: 30 }}>
      {allCart.map((cart) => (
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
      ))}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
