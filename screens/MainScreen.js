import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import AuthContext from "../context/context";
import TaskDisplay from "../components/TaskDisplay";

const MainScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [message, setMessage] = useState("Click me!");

  const todos = [
    {
      id: 1,
      title: "Eat Food.",
      desc: "Eat food reagularly",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Do Home Work",
      desc: "Do Your Homework Bitchs",
      completed: false,
      priority: "meduim",
    },
  ];

  const [tasks, setTasks] = useState(todos);
  const addTask = (newTask) => {
    todos = [...todos, newTask];
    setTasks(todos);
  };

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#002B5B" />

      <TouchableOpacity
        className="bg-red-300 p-3"
        onPress={() => authContext.setUsername(null)}
      >
        <Text className="text-black font-bold">Reset</Text>
      </TouchableOpacity>
      {message && (
        <View className="px-3 bg-red-200 flex-row justify-between align-bottom">
          <Text className="py-3">{message}</Text>
          <TouchableOpacity onPress={() => setMessage(null)}>
            <View className="p-3 ">
              <AntDesign name="closecircle" size={16} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View className="px-5 pt-7 pb-5">
        <View className="flex-row justify-between align-middle">
          <Text className="text-lg font-bold">Tasks Todo</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
            <Entypo name="add-to-list" size={24} color="#8FE3CF" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-5">
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <TaskDisplay item={item} />}
        />
      </View>
    </View>
  );
};

export default MainScreen;
