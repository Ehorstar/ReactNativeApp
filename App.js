import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/ui/components/Header";
import Separator from "./src/ui/components/Separator/Separator";
import TotalBalance from "./src/ui/components/TotalBalance";
import InCome from "./src/ui/components/InCome";
import Transactions from "./src/ui/components/Transactions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Separator size={20} />

      <TotalBalance />

      <Separator size={20} />

      <InCome />

      <Separator size={20} />

      <Transactions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
