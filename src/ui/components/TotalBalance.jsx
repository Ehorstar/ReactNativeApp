import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import AppModal from "./AppModal/AppModal";

const TotalBalance = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.totalBalance}>
      <Text style={styles.totalBalanceText}>Total Balance</Text>

      <View style={styles.balance}>
        <Text style={styles.balanceText}>$12,345.67</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          variant="white"
          icon={<FontAwesome name="send" size={24} color="dodgerblue" />}
          text="Send"
          onPress={() => setVisible(true)}
        />
        <Button
          variant="white"
          icon={
            <MaterialIcons name="call-received" size={24} color="dodgerblue" />
          }
          text="Receive"
          onPress={() => setVisible(true)}
        />
        <Button
          variant="white"
          icon={<Fontisto name="history" size={24} color="dodgerblue" />}
          text="History"
          onPress={() => setVisible(true)}
        />

        <AppModal visible={visible} onClose={() => setVisible(false)}>
          <Text>Send/Receive/History</Text>
        </AppModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalBalance: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  totalBalanceText: {
    paddingTop: 10,
    fontSize: 20,
    color: "#aaa",
    fontWeight: "600",
  },
  balance: {
    width: "100%",
    height: 80,
    marginVertical: 10,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  },
});

export default TotalBalance;
