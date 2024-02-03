import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DataProduct } from "../api/data";
import AddCounter from "../components/add-counter";
import ProductStat from "../components/product-stat";

//icons
import organicIcon from "../assets/organic-icon.png";
import fireIcon from "../assets/fire.png";
import notoStartIcon from "../assets/noto_star.png";
import yearIcon from "../assets/1year.png";

//dynamic screen
const SpecificProduct = ({ route }) => {
  const { dynamicData } = route.params;
  const [specificProduct, setSpecificProduct] = useState({});

  useEffect(() => {
    const handleFetchData = () => {
      const extractedDataProduct = DataProduct.find(
        (product) => product.id === dynamicData
      );

      setSpecificProduct(extractedDataProduct);
    };
    if (dynamicData) {
      handleFetchData();
    }
  }, [dynamicData]);

  return (
    <View style={styles.container}>
      <View style={styles.semiContainer}>
        <Image source={specificProduct.img} style={styles.imageProduct} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
            width: "100%",
          }}
        >
          <View style={styles.headerContainer}>
            <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Text style={styles.textTitle}>{specificProduct.title}</Text>
              <Text style={styles.textKiloPrice}>
                {specificProduct.kilo}kg, {specificProduct.price}$
              </Text>
            </View>

            <AddCounter />
          </View>
          <Text style={{ paddingHorizontal: 5, color: "#ADAAAA" }}>
            {specificProduct.description}
          </Text>
        </View>
        <ProductStat
          organicPercentage={specificProduct.organicPercentage}
          expirationDate={specificProduct.expirationDate}
          rating={specificProduct.rating}
          grm={specificProduct.grm}
        />
      </View>
    </View>
  );
};

export default SpecificProduct;

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    paddingVertical: 20,
  },
  semiContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 50,
    alignItems: "center",
    width: wp(100),
    paddingHorizontal: 20,
  },
  imageProduct: {
    width: wp(75),
    height: hp(30),
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "600",
  },
  textKiloPrice: {
    fontSize: 24,
    fontWeight: "500",
    color: "#D80032",
  },
});
