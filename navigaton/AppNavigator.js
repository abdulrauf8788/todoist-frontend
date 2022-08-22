import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

import TaskContext from "../context/TaskContext";

const Drawer = createDrawerNavigator();

const getStoredTasks = () => {
  return [
    {
      id: 1,
      title: "Eat Food.",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Do Home Work",
      completed: false,
      priority: "medium",
    },
  ];
};

const AuthNavigator = () => {
  const [tasks, setTasks] = useState(getStoredTasks());

  const addTask = (newTask) => {
    tasks.length == 0
      ? (newTask.id = 1)
      : (newTask.id = tasks[tasks.length - 1].id + 1); // Get id of last element and add 1 if not then 1
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    if (tasks.length == 0) return;
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    if (tasks.length == 0) return;
    tasks.map((task) => {
      task.id == taskId ? (task.completed = !task.completed) : null;
    });
    setTasks([...tasks]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, completeTask }}
    >
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
    </TaskContext.Provider>
  );
};

export default AuthNavigator;
