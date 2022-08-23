import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_TOKEN_KEY = "@authKey";

const storeAuthToken = async (value) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, value);
  } catch (e) {
    console.log("Error storing auth token");
  }
};

const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("Error retriving auth token");
  }
};

export default { storeAuthToken, getAuthToken };
