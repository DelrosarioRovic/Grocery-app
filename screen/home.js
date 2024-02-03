import { View, StyleSheet } from "react-native";
import ProfileHome from "../components/profile-home";
import SearchHome from "../components/search-home";
import SliderCarousel from "../components/slider-carousel";
import Categories from "../components/categories";
import BestSelling from "../components/best-selling";
import HomeCart from "../components/home-cart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
  const allCart = useSelector((state) => state.cart.cardData);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    const handleTotalCartItems = () => {
      let totalItems = 0;
      for (let i = 0; i < allCart.length; i++) {
        totalItems = totalItems + parseInt(allCart[i].quantity);
      }
      return totalItems;
    };
    const total = handleTotalCartItems();
    setTotalCartItems(total);
  }, [allCart]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ProfileHome />
        <SearchHome />
        <SliderCarousel />
        <Categories />
        <BestSelling navigation={navigation} />
        <HomeCart navigation={navigation} totalCartItems={totalCartItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "col",
    backgroundColor: "#ffffff",
    width: "100%",
  },
  topContainer: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },
});

export default Home;
