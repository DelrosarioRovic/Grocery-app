import { View, Text, ScrollView } from "react-native";
import ItemSell from "../components/item-sell";
import { DataProduct } from "../api/data";

const AllProducts = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        {DataProduct.map((product, index) => (
          <View key={index} style={{ paddingHorizontal: 10 }}>
            <ItemSell
              itemImg={product.img}
              kilo={product.kilo}
              price={product.price}
              title={product.title}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AllProducts;
