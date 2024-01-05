import { Text, View, Image } from "react-native";
import carrotIntro from "../assets/carrot-intro.png";

const Login = () => {
  return (
    <View>
      <View>
        <View>
          <Image source={carrotIntro} alt="carrot" />
        </View>
        <View>
          <Text>Enter Your Mobile Number</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
