import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import addBtnIcon from "../assets/addBtn.png";

const ItemSell = ({ itemImg, title, price, kilo, id, navigation }) => {
  const handleSendData = () => {
    navigation.navigate("Specific-product", { dynamicData: id });
  };

  return (
    <TouchableOpacity onPress={handleSendData}>
      <View
        style={{
          width: wp(30),
          height: hp(25),
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
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
        <Image
          source={addBtnIcon}
          style={{ position: "absolute", bottom: -5, right: -5 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemSell;
