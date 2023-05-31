import * as React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./routes/Drawer";

function App() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-semiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
