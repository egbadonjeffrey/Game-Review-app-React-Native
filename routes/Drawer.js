import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
        name="Game Zone"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
