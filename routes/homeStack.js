import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image, View, TextInput } from "react-native";
import arrowLeft from "../assets/ep_arrow-left-bold.png";
import Intro from "../screen/intro";
import Login from "../screen/login";
import Home from "../screen/home";
import AllProducts from "../screen/all-products";
import searchIcon from "../assets/search.png";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const Stack = createNativeStackNavigator();

const Route = () => {
  const [searchBar, setSearchBar] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: null, // Set the title as null to have an empty title
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={arrowLeft} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),

            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="all-products"
          component={AllProducts}
          options={({ navigation }) => ({
            title: null, // Set the title as null to have an empty title
            headerLeft: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: wp(100),
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={arrowLeft} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <TextInput
                  placeholder="Type something..."
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                />
                <View style={{ width: "10%" }}>
                  <Image source={searchIcon} alt="search" />
                </View>
              </View>
            ),

            headerShadowVisible: false,
          })}
        />

        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
