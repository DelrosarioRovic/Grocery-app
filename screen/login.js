import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import carrotIntro from "../assets/carrot-intro.png";
import { useState, useRef, useEffect } from "react";

const Login = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("Home");
  };
  const [inputNum, setInputNum] = useState("");
  const inputRef = useRef(null);

  const onChangeNumber = (num) => {
    const numericValue = num.replace(/[^0-9]/g, "");

    setInputNum(numericValue);
  };

  useEffect(() => {
    // Auto focus the TextInput when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.carrotContainer}>
          <Image source={carrotIntro} style={styles.carrotImg} alt="carrot" />
        </View>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginTitle}>Enter Your Mobile Number</Text>
          <Text style={styles.loginText}>
            We will send you a verification code
          </Text>
        </View>
        <View style={styles.numberInputContainer}>
          <Text style={styles.numberInputLabel}>+44</Text>
          <Text style={styles.numberInputLabel}>|</Text>
          <TextInput
            ref={inputRef}
            style={styles.numberInput}
            onChangeText={(num) => onChangeNumber(num)}
            value={inputNum}
            placeholder="(000)-000-000"
            placeholderTextColor="#B4B4B4"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.termAndServicesContainer}>
          <TouchableOpacity style={styles.continueBtn} onPress={handleNavigate}>
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.termAndServicesTextContainer}>
            <Text style={styles.termUseText}>
              By clicking on “Continue” you are agreeing to our{" "}
              <Text style={styles.termUse}>terms of use</Text>
            </Text>
          </View>
        </View>
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
    height: "100%",
  },
  subContainer: {
    display: "flex",
    gap: 20,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  carrotContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    alignContent: "center",
    padding: 5,
  },
  carrotImg: {
    width: 80,
    height: 80,
  },
  loginTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  loginTitle: {
    fontSize: 40,
    textAlign: "center",
  },
  loginText: {
    fontSize: 20,
    color: "#B4B4B4",
    textAlign: "center",
  },
  numberInputContainer: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInputLabel: {
    fontSize: 28,
  },
  numberInput: {
    fontSize: 28,
  },
  termAndServicesContainer: {
    padding: 20,
  },
  termAndServicesTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  termUseText: {
    textAlign: "center",
    fontSize: 16,
    color: "#B4B4B4",
  },
  termUse: {
    fontSize: 16,
    color: "#000000",
    textDecorationLine: "underline",
  },
  continueBtn: {
    backgroundColor: "#009959",
    paddingVertical: 15,
    borderRadius: 50,
  },
  continueBtnText: {
    fontSize: 28,
    textAlign: "center",
    color: "#ffffff",
  },
});
export default Login;
