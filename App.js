import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigaton/AuthNavigator";
import AppNavigator from "./navigaton/AppNavigator";

import AuthContext from "./context/context";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <TailwindProvider>
        <NavigationContainer>
          {/* {username ? <AppNavigator /> : <AuthNavigator />} */}
          <AppNavigator />
        </NavigationContainer>
      </TailwindProvider>
    </AuthContext.Provider>
  );
}
