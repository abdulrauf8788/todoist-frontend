import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { AntDesign } from "@expo/vector-icons";

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const taskContext = useContext(TaskContext);
  const [taskError, setTaskError] = useState(false);
  const minTaskLength = 2;

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
      label: "Medium",
      value: "medium",
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
    if (title.length < minTaskLength) {
      setTaskError(true);
      return;
    } else {
      setTaskError(false);
    }

    const newItem = {
      title,
      completed: false,
      priority: getSelectedPriority(),
    };

    // Reset Field Values
    setTitle("");
    setRadioButtons(radioButtonsData);

    taskContext.addTask(newItem);
    navigation.navigate("Home");
  };

  return (
    <View>
      {/* <View className="py-5 px-4 bg-[#002B5B] ">
        <Text className="font-bold text-xl text-white">Add New Task</Text>
      </View> */}

      <View className="py-5 px-4">
        <Text className="font-bold text-lg py-2">Title:</Text>
        <View className="bg-[#8FE3CF] rounded-lg flex-row items-center">
          <TextInput
            className="px-2 py-3 flex-1"
            placeholder="Do this. "
            value={title}
            onChangeText={setTitle}
            maxLength={32}
          />
          {taskError && (
            <AntDesign
              name="exclamationcircle"
              size={16}
              color="orange"
              style={{ paddingRight: 10 }}
            />
          )}
        </View>

        <Text className="font-bold text-lg mt-1 py-2">Priority:</Text>
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
          className="mt-8 py-4 w-90 rounded-lg bg-[#256D85]"
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
