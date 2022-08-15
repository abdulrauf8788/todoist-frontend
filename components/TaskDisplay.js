import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const TaskDisplay = ({ item }) => {
  const _item = item.item;
  const [completed, setCompleted] = useState(_item.completed);
  return (
    <TouchableOpacity
      className="px-3 py-4 mb-2 bg-[#8FE3CF] rounded-lg flex-row justify-center align-middle"
      onPress={() => {
        setCompleted(!completed);
      }}
    >
      <View className="py-1">
        {completed ? (
          <AntDesign name="checkcircle" size={16} color="green" />
        ) : (
          <AntDesign name="checkcircleo" size={16} color="black" />
        )}
      </View>

      <Text className="text-[#002B5B] pl-2 flex-1">{_item.title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <MaterialIcons name="delete" size={24} color="#ff4d4d" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskDisplay;
