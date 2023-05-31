import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/game_bg.png")}
        style={styles.header}
      >
        <MaterialIcons
          name="menu"
          size={28}
          onPress={openMenu}
          style={styles.icon}
        />
        <View style={styles.headerTitle}>
          <Image
            source={require("../assets/heart_logo.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#dddd",
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#444",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 15,
    color: "#444",
  },
  headerImage: {
    width: 26,
    height: 26,
  },
  headerTitle: {
    flexDirection: "row",
    gap: 5,
  },
});
