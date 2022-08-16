import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Drawer = createDrawerNavigator();

const AuthNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: { backgroundColor: "#002B5B" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="CompletedTasks" component={CompletedTasksScreen} />
      <Drawer.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{ title: "Add new Task" }}
      />
    </Drawer.Navigator>
  );
};

export default AuthNavigator;
