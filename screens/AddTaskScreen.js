import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const AddTaskScreen = ({ navigation }) => {
  return (
    <View>
      <View className="py-5 px-4 bg-[#002B5B] ">
        <Text className="font-bold text-xl text-white">Add New Task</Text>
      </View>

      <View className="py-5 px-4">
        <Text className="font-bold text-lg">Title:</Text>
        <View className="bg-[#8FE3CF] rounded-lg">
          <TextInput className="px-2 py-3" placeholder="Do this. " />
        </View>

        <Text className="font-bold text-lg mt-1">Description:</Text>
        <View className="bg-[#8FE3CF] rounded-lg h-min h-40">
          <TextInput
            className="px-2 py-3"
            placeholder="Detail of your task here.  "
          />
        </View>

        <Text className="font-bold text-lg mt-1">Priority:</Text>
        <View className="bg-[#8FE3CF] rounded-lg">
          <TextInput className="px-2 py-3" placeholder="Do this. " />
        </View>

        <TouchableOpacity className="mt-6 py-4 w-90 rounded-lg bg-[#256D85]">
          <Text className="text-center text-white font-bold text-lg">
            Add Task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-3 rounded-lg bg-red-200 mt-3"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-red-900 text-center ">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
