import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import TaskDisplay from "../components/TaskDisplay";
import TaskContext from "../context/TaskContext";

const MainScreen = ({ navigation }) => {
  const tasksContext = useContext(TaskContext);
  const [message, setMessage] = useState("Click me!");

  const getRecentlyCompletedTasks = () => {
    const completedTasks = tasksContext.tasks.filter(
      (task) => task.completed == true
    ); // Get completed Tasks

    completedTasks.reverse(); // Reverse to show the latest tasks

    const recentCompletedTasks = completedTasks.slice(
      0,
      Math.min(3, completedTasks.length + 1)
    ); // Get the latest 3 tasks or max if less than 3

    return recentCompletedTasks;
  };

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#002B5B" />

      {message && false && (
        <TouchableOpacity className="px-3 bg-red-200 flex-row justify-between align-bottom">
          <Text className="py-3">{message}</Text>
          <TouchableOpacity onPress={() => setMessage(null)}>
            <View className="p-3 ">
              <AntDesign name="closecircle" size={16} color="red" />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}

      <View className="px-5 pt-7 pb-4">
        <View className="flex-row justify-between align-middle">
          <Text className="text-lg font-bold">Tasks Todo</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
            <Entypo name="add-to-list" size={24} color="#256D85" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-5 flex-1 ">
        {tasksContext.tasks?.length > 0 && (
          <FlatList
            style={{ maxHeight: 320 }}
            data={tasksContext.tasks
              .filter((task) => task.completed == false)
              .reverse()}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <TaskDisplay item={item} />}
          />
        )}
      </View>
      {/* Completed Tasks */}
      <View className="mt-4 px-5 flex-1 ">
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold mb-3">Recently Completed</Text>
          <TouchableOpacity
            className="px-1"
            onPress={() => navigation.navigate("CompletedTasks")}
          >
            <MaterialIcons name="clear-all" size={26} color="#256D85" />
          </TouchableOpacity>
        </View>
        {tasksContext.tasks?.length > 0 && (
          <FlatList
            data={getRecentlyCompletedTasks()}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <TaskDisplay item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default MainScreen;
