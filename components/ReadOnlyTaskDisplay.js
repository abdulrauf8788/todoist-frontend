import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import TaskContext from "../context/TaskContext";

const TaskDisplay = ({ item }) => {
  const _item = item.item;
  const tasksContext = useContext(TaskContext);

  const getPriorityColor = () => {
    switch (_item.priority) {
      case "low":
        return "[#256D85]";
      case "medium":
        return "gray-500";
      case "high":
        return "red-500";
    }
  };
  const priorityColor = getPriorityColor();

  return (
    <View
      className={`px-3 py-4 mb-2 bg-[#8FE3CF] rounded-lg flex-row justify-center align-middle border-${priorityColor} border-l-4 border-r-4 `}
    >
      <View className="p-1">
        <AntDesign name="checkcircle" size={16} color="green" />
      </View>

      <Text className="text-[#002B5B] pl-2 flex-1 text-base">
        {_item.title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          tasksContext.removeTask(_item.id);
        }}
      >
        <MaterialIcons name="delete" size={24} color="#ff6666" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskDisplay;
