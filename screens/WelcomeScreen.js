import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="bg-[#002B5B] flex-1 pt-10">
      <StatusBar backgroundColor="#002B5B" barStyle="light-content" />

      <View className="flex-1 items-center pt-6 justify-start ">
        <Text className="text-white text-light text-2xl p-3">Welcome to</Text>
        <Image source={require("../assets/TextLogo.png")} />
        <Text className="text-gray-400 p-2 text-sm">Organize your tasks</Text>
      </View>
      <View className="flex-1 items-center">
        <Image source={require("../assets/welcomeImage.png")} />
      </View>
      <View className="flex-1">
        <TouchableOpacity
          className="bg-[#8FE3CF] justify-center mx-10 p-4 rounded-lg items-center flex-row"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-[#002B5B] text-lg">Get Started</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="8FE3CF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
