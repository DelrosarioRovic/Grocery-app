import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ItemSell from "./item-sell";
import { DataProduct } from "../api/data";

const BestSelling = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("all-products");
  };
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>Best selling 🔥</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.btnText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <ItemSell
          itemImg={DataProduct[0].img}
          price={DataProduct[0].price}
          title={DataProduct[0].title}
          kilo={DataProduct[0].kilo}
        />
        <ItemSell
          itemImg={DataProduct[1].img}
          price={DataProduct[1].price}
          title={DataProduct[1].title}
          kilo={DataProduct[1].kilo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnText: {
    color: "#00BC6D",
    fontWeight: "600",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BestSelling;
