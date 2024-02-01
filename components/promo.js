import { View, Text, StyleSheet } from "react-native";

const PromoSliderItem = ({ title, price, bgColor }) => {
  return (
    <View style={[styles.promoContainer, { backgroundColor: bgColor }]}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text>Get {price}%</Text>
      <View>
        <Text>Grab Offers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promoContainer: {
    width: "600px",
    height: "600px",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default PromoSliderItem;
