import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import React, { useState } from "react";

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Low",
      value: "low",
      containerStyle: {
        flex: 1,
        alignItems: "center",
      },
      borderColor: "#256D85",
      color: "#256D85",
      labelStyle: {
        color: "#256D85",
      },
      selected: true,
    },
    {
      id: "2",
      label: "Meduim",
      value: "meduim",
      containerStyle: {
        flex: 1,
        alignItems: "center",
      },
      borderColor: "#000",
      color: "#000",
      labelStyle: {
        color: "#000",
      },
    },

    {
      id: "3",
      label: "High",
      value: "high",
      containerStyle: {
        flex: 1,
        alignItems: "center",
      },
      borderColor: "red",
      color: "red",
      labelStyle: {
        color: "red",
      },
    },
  ];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const getSelectedPriority = () => {
    const selected = radioButtons.filter((item) =>
      item.selected ? true : false
    );
    const selectedValue = radioButtonsData.filter(
      (item) => item.id == selected[0]?.id
    );
    return selectedValue[0]?.value;
  };

  const handelSubmit = () => {
    const newItem = {
      title,
      desc,
      completed: false,
      priority: getSelectedPriority(),
    };

    // Reset Field Values
    setTitle("");
    setDesc("");
    setRadioButtons(radioButtonsData);

    // Safe Task Here!

    navigation.navigate("Home");
  };

  return (
    <View>
      {/* <View className="py-5 px-4 bg-[#002B5B] ">
        <Text className="font-bold text-xl text-white">Add New Task</Text>
      </View> */}

      <View className="py-5 px-4">
        <Text className="font-bold text-lg">Title:</Text>
        <View className="bg-[#8FE3CF] rounded-lg">
          <TextInput
            className="px-2 py-3"
            placeholder="Do this. "
            value={title}
            onChangeText={setTitle}
            maxLength={32}
          />
        </View>

        <Text className="font-bold text-lg mt-1">Description:</Text>
        <View className="bg-[#8FE3CF] rounded-lg h-40">
          <TextInput
            className="px-2 py-3 w-90"
            multiline
            placeholder="Detail of your task here.  "
            value={desc}
            onChangeText={setDesc}
          />
        </View>

        <Text className="font-bold text-lg mt-1">Priority:</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
          containerStyle={{
            backgroundColor: "#8FE3CF",
            padding: 10,
            borderRadius: 8,
          }}
        />

        <TouchableOpacity
          className="mt-6 py-4 w-90 rounded-lg bg-[#256D85]"
          onPress={handelSubmit}
        >
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
