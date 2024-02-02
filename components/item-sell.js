import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ItemSell = ({ itemImg, title, price, kilo }) => {
  return (
    <View
      style={{
        width: wp(30),
        height: hp(25),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image source={itemImg} style={{ width: wp(30), height: hp(15) }} />
      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "#D80032", fontWeight: "600", fontSize: 17 }}>
            {kilo}KG,{" "}
          </Text>
          <Text style={{ color: "#D80032", fontWeight: "600", fontSize: 17 }}>
            {price}$
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemSell;
