import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./src/ui/components/Button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppModal from "./src/ui/components/AppModal/AppModal";
import { useState } from "react";
import Header from "./src/ui/components/Header";
import Separator from "./src/ui/components/Separator/Separator";
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Separator size={20} />

      <View style={styles.totalprice}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  totalprice: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 10,
    margin: 10,
    
  }
});
