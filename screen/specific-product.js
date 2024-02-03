import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DataProduct } from "../api/data";
import AddCounter from "../components/add-counter";

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
        <View style={styles.headerContainer}>
          <Text>{specificProduct.title}</Text>
          <AddCounter />
        </View>
      </View>
    </View>
  );
};

export default SpecificProduct;

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  semiContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "space-between",
  },
  imageProduct: {
    width: wp(75),
    height: hp(30),
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
