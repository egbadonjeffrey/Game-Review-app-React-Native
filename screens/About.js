import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Header from "../shared/header";

export default About = ({ navigation }) => {
  return (
    <View style={globalStyles.fullHeight}>
      <Header navigation={navigation} title="About Game Zone" />
      <View style={globalStyles.container}>
        <Text>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
