import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_STORE_KEY = "@userTasks";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(TASK_STORE_KEY, jsonValue);
  } catch (e) {
    console.log("Error storing tasks.");
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASK_STORE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log("Error reading stored tasks.");
  }
};

export default { storeData, getData };
