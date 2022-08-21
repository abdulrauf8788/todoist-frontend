import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskDisplay from "../components/TaskDisplay";

const CompletedTasksScreen = () => {
  const tasksContext = useContext(TaskContext);

  return (
    <View>
      {/* Title */}
      <View>
        <View className="px-5 pt-7 pb-5">
          <View className="flex-row justify-between align-middle">
            <Text className="text-lg font-bold">Completed Tasks</Text>
          </View>
        </View>
      </View>
      {/* Tasks */}
      <View className="px-5">
        <FlatList
          data={tasksContext.tasks}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <TaskDisplay item={item} />}
        />
      </View>
    </View>
  );
};

export default CompletedTasksScreen;
