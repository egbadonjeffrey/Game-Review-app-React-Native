import { StyleSheet, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

export default ReviewsDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const rating = item.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text> Gamezone rating: {item.rating} </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
