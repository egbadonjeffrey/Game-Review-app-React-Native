import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Modal,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../shared/header";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Gots to catch them all again",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    { title: 'not so "Final" fantasy', rating: 3, body: "lorem ipsum", key: 3 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <SafeAreaView style={globalStyles.fullHeight}>
      <Header navigation={navigation} title="Game Zone" />
      <View>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                onPress={() => setModalOpen(false)}
                style={[styles.modalToggle, styles.modalClose]}
              />

              <ReviewForm addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons
          name="add"
          size={24}
          onPress={() => setModalOpen(true)}
          style={styles.modalToggle}
        />

        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Review Details", { item })}
            >
              <Card>
                <Text style={globalStyles.titleText}> {item.title} </Text>
              </Card>
            </TouchableOpacity>
          )}
        />

        <StatusBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
});
