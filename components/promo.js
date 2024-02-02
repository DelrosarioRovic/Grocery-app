import { View, Text, StyleSheet } from "react-native";

const PromoSliderItem = ({ title, price, bgColor }) => {
  return (
    <View style={[styles.promoContainer, { backgroundColor: bgColor }]}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textDescription}>Get {price}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.containerText}>Grab Offers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promoContainer: {
    paddingLeft: 35,
    display: "flex",
    width: 280,
    height: 280,
    borderRadius: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    top: -40,
    right: -100,
  },
  textTitle: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "600",
  },
  textDescription: {
    color: "#ffffff",
    fontSize: 30,
  },
  textContainer: {
    borderRadius: 100,
    width: 120,
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    paddingVertical: 5,
  },
  containerText: {
    color: "#009959",
    fontSize: 16,
    fontWeight: "800",
  },
});

export default PromoSliderItem;
