import { View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PromoSliderItem from "./promo";

const sliderDataImg = [
  {
    image: require("../assets/sliderImage1.jpeg"),
    title: "Ramadan Offer",
    price: "25%",
    bgColor: "#FC6736",
  },
  {
    image: require("../assets/sliderImage2.jpeg"),
    title: "Ramadan Offer",
    price: "35%",
    bgColor: "#009959",
  },
  {
    image: require("../assets/sliderImage3.jpeg"),
    title: "Ramadan Offer",
    price: "29%",
    bgColor: "#D24545",
  },
];

const SliderCarousel = () => {
  return (
    <Carousel
      layout="default"
      data={sliderDataImg}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      firstItem={1}
      autoplayInterval={4000}
      sliderWidth={wp(100)}
      itemWidth={wp(95) - 70}
      slideStyle={{
        display: "flex",
        alignItems: "center",
      }}
    />
  );
};

export default SliderCarousel;

const ItemCard = ({ item, index }, ParallaxProps) => {
  return (
    <View
      style={{ position: "relative", overflow: "hidden", borderRadius: 30 }}
    >
      <Image
        source={item.image}
        style={{
          width: wp(97) - 70,
          height: hp(25),
        }}
      />
      <PromoSliderItem
        title={item.title}
        price={item.price}
        bgColor={item.bgColor}
      />
    </View>
  );
};
