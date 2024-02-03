import { View, Text, Image, StyleSheet } from "react-native";

import organicIcon from "../assets/organic-icon.png";
import fireIcon from "../assets/fire.png";
import notoStartIcon from "../assets/noto_star.png";
import yearIcon from "../assets/1year.png";

const ProductStat = ({ organicPercentage, expirationDate, rating, grm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statItemContainer}>
        <Image source={organicIcon} style={styles.icon} />
        <View>
          <Text style={styles.statsText}>{organicPercentage}</Text>
          <Text style={styles.statsTextLabel}>Organic</Text>
        </View>
      </View>
      <View style={styles.statItemContainer}>
        <Image source={yearIcon} style={styles.icon} />
        <View>
          <Text style={styles.statsText}>{expirationDate}</Text>
          <Text style={styles.statsTextLabel}>Expiration</Text>
        </View>
      </View>
      <View style={styles.statItemContainer}>
        <Image source={notoStartIcon} style={styles.icon} />
        <View>
          <Text style={styles.statsText}>{rating}</Text>
          <Text style={styles.statsTextLabel}>Review</Text>
        </View>
      </View>

      <View style={styles.statItemContainer}>
        <Image source={fireIcon} style={styles.icon} />
        <View>
          <Text style={styles.statsText}>{grm}</Text>
          <Text style={styles.statsTextLabel}>100 GRM</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductStat;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    rowGap: 50,
  },
  statItemContainer: {
    display: "flex",
    flexDirection: "row",
    width: "45%",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-evenly",
  },
  statsText: {
    fontSize: 20,
    color: "#009959",
  },
  statsTextLabel: {
    color: "#ADAAAA",
  },
  icon: {
    width: 47,
    height: 47,
  },
});
