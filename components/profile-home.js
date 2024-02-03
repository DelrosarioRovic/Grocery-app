import { View, Text, Image, StyleSheet } from "react-native";
import ProfileImg from "../assets/profilepicture.png";
import gameIconsLocation from "../assets/game-icons_position-marker.png";
import arrowDown from "../assets/arrow-down.png";

const ProfileHome = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileBox1}>
        <View style={styles.profileImgContainer}>
          <Image
            source={ProfileImg}
            alt="location"
            style={styles.profileImage}
          />
        </View>
        <View style={{ display: "flex", gap: 5 }}>
          <Text style={{ color: "#B4B4B4" }}>Good Morning</Text>
          <Text>Amelia Barlow</Text>
        </View>
      </View>
      <View style={styles.profileBox2}>
        <View>
          <Image source={gameIconsLocation} alt="location" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text>My Flat</Text>
          <Image source={arrowDown} alt="arrow-down" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  profileBox1: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  profileBox2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});

export default ProfileHome;
