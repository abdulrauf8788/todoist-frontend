import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const TaskDisplay = ({ item }) => {
  const _item = item.item;
  const [completed, setCompleted] = useState(_item.completed);

  const getPriorityColor = () => {
    switch (_item.priority) {
      case "low":
        return "[#256D85]";
      case "meduim":
        return "gray-500";
      case "high":
        return "red-500";
    }
  };

  return (
    <TouchableOpacity
      className="px-3 py-4 mb-2 bg-[#8FE3CF] rounded-lg flex-row justify-center align-middle"
      onPress={() => {
        setCompleted(!completed);
      }}
    >
      <View
        className={`bg-${getPriorityColor()} bg- p-2 rounded-full h-1 mt-1`}
      ></View>
      <Text className="text-[#002B5B] pl-2 flex-1 text-base">
        {_item.title}
      </Text>
      <View className="py-1 px-3">
        {completed ? (
          <AntDesign name="checkcircle" size={16} color="green" />
        ) : (
          <AntDesign name="checkcircleo" size={16} color="black" />
        )}
      </View>

      <TouchableOpacity onPress={() => {}}>
        <MaterialIcons name="delete" size={24} color="#ff4d4d" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskDisplay;
