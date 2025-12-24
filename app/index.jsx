import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Separator from "../src/ui/components/Separator/Separator";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Separator size={20} />
      <Link href="/about">About</Link>
      <Separator size={20} />
      <Link href="/productList">Product List</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Index;
