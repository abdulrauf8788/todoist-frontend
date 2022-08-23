import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigaton/AuthNavigator";
import AppNavigator from "./navigaton/AppNavigator";

import AuthContext from "./context/context";
import { useState } from "react";
import authStorage from "./storage/authStorage";

export default function App() {
  const [username, setUsername] = useState();

  const setStoreUsername = async (username) => {
    await authStorage.storeAuthToken(username);
    setUsername(username);
  };

  const getAuthToken = async () => {
    const token = await authStorage.getAuthToken();
    if (token) {
      setUsername(token);
    } else {
      console.log("No token");
    }
  };

  useState(() => {
    getAuthToken();
  }, []);

  return (
    <AuthContext.Provider value={{ username, setStoreUsername }}>
      <TailwindProvider>
        <NavigationContainer>
          {username ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </TailwindProvider>
    </AuthContext.Provider>
  );
}
