import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="CompletedTasks" component={CompletedTasksScreen} />
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
