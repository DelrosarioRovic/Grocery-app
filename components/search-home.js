import { View, Image, TextInput, StyleSheet } from "react-native";
import SearchBar from "../assets/search.png";
import { useState } from "react";


const SearchHome = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ width: "10%" }}>
        <Image source={SearchBar} alt="search" />
      </View>

      <View style={{ width: "90%" }}>
        <TextInput
          style={{ fontSize: 16 }}
          onChangeText={(text) => setSearch(text)}
          value={search}
          placeholder="Search category"
          placeholderTextColor="#B4B4B4"
          keyboardType="default"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});

export default SearchHome;
