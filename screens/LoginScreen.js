import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../context/context";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const minNameLength = 3;

  const authContext = useContext(AuthContext);

  const handelLogin = () => {
    if (name.length >= minNameLength) {
      authContext.setStoreUsername(name);
      setNameError(false);
      setName("");
    } else {
      setNameError(true);
    }
  };

  return (
    <View className="bg-[#002B5B] flex-1 pt-10">
      <StatusBar backgroundColor="#002B5B" barStyle="light-content" />
      <View className="basis-1/3 items-center p-6 justify-start ">
        <Text className="text-white text-light text-2xl p-3">Welcome to</Text>
        <Image source={require("../assets/TextLogo.png")} />
        <Text className="text-gray-400 p-2 text-sm">Organize your tasks</Text>
      </View>
      <View className="items-center pt-10 flex-1">
        <Text className="ml-1 pb-2 w-80 text-white ">Enter your Name: </Text>
        <View className="p-3 w-80 flex-row items-center justify-between rounded-lg bg-[#256D85]">
          <TextInput
            className="text-white px-1 flex-1"
            maxLength={32}
            value={name}
            placeholder="John doe "
            onChangeText={(val) => setName(val)}
          />
          {nameError && (
            <AntDesign name="exclamationcircle" size={16} color="orange" />
          )}
        </View>
        <TouchableOpacity
          className="bg-[#8FE3CF] justify-center mx-10 mt-10 w-80 p-4 rounded-lg items-center flex-row"
          onPress={() => handelLogin()}
        >
          <Text className="text-[#002B5B] text-lg">Continue</Text>
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

export default LoginScreen;
