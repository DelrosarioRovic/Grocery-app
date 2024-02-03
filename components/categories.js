import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DataProduct } from "../api/data";

const Categories = () => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>Categories 😊</Text>
        <TouchableOpacity>
          <Text style={styles.btnText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        {DataProduct.slice(0, 4).map((product, index) => (
          <Image
            key={index}
            source={product.img}
            style={{ width: "24%", height: 100 }}
          />
        ))}
      </View>
    </View>
  );
};

export default Categories;

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
});
