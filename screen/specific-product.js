import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DataProduct } from "../api/data";
import AddCounter from "../components/add-counter";
import ProductStat from "../components/product-stat";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/hooks/cart";

//dynamic screen
const SpecificProduct = ({ route, navigation }) => {
  const [counter, setCounter] = useState("1");
  const { dynamicData } = route.params;
  const [specificProduct, setSpecificProduct] = useState({});
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(addCart({ specificProduct, counter }));
    navigation.navigate("Cart");
  };
  //start of f for add counter and minus counter to add to cart
  const handleIncrement = () => {
    let numAdd = String(parseInt(counter) + 1);
    setCounter(numAdd);
  };

  const handleDecrement = () => {
    let addMinus = parseInt(counter) - 1;
    setCounter(addMinus <= 0 ? "1" : String(addMinus));
  };

  const handleInputCounter = (e) => {
    let input = e.nativeEvent.text;

    let numericInput = parseFloat(input);

    setCounter(
      isNaN(numericInput) || input.trim() === "" ? "1" : String(numericInput)
    );
  };
  //end
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

            <AddCounter
              counter={counter}
              setCounter={setCounter}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleInputCounter={handleInputCounter}
            />
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
        <View style={styles.addToCartBtnContainer}>
          <TouchableOpacity
            style={styles.addToCartBtn}
            onPress={handleNavigate}
          >
            <Text style={styles.textAddToCart}>Add to cart</Text>
          </TouchableOpacity>
        </View>
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
  addToCartBtnContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  addToCartBtn: {
    backgroundColor: "#009959",
    width: "90%",
    paddingVertical: 10,
    borderRadius: 50,
  },
  textAddToCart: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
});
