import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./Button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppModal from "./AppModal/AppModal";
import Entypo from "@expo/vector-icons/Entypo";

const InCome = () => {
  return (
    <View style={styles.main}>
      <View style={styles.cardIncome}>
        <Entypo name="arrow-up" size={32} color="green" />
        <View>
          <Text style={{ fontSize: 14, color: "#555" }}>Income</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>+$5,200</Text>
        </View>
      </View>

      <View style={styles.cardExpense}>
        <Entypo name="arrow-down" size={32} color="red" />
        <View>
          <Text style={{ fontSize: 14, color: "#555" }}>Expenses</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>-$2,150</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  cardIncome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: 180,
    height: 80,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "rgba(0, 200, 0, 0.15)",
  },

  cardExpense: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: 180,
    height: 80,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "rgba(255, 0, 0, 0.15)",
  },
});


export default InCome;
