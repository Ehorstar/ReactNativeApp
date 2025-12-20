import {
  StyleSheet,
  Text,
  View,
  Button as ButtonRN,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Button from "./src/ui/components/Button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import Separator from "./src/ui/components/Button/Separator/Separator";


export default function App() {
  const handlePress = () => {
    alert("Button pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My App</Text>

      <ButtonRN title="Click me" onPress={handlePress} color="red" disabled />

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          { marginTop: 20 },
        ]}
        hitSlop={20}
      >
        <Text style={{ color: "white" }}>Hello</Text>
      </Pressable>

      <Separator size={20} />

      <Button
        text="Click me"
        onPress={handlePress}
        variant="primary"
        disabled={true}
        icon={<AntDesign name="android" size={24} color="black" />}
        style={{ marginTop: 20 }}
      />
      <Separator size={20} />

      <Image
        source={{
          uri: "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg",
        }}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      />

      <Image
        source={require("./assets/favicon.png")}
        style={{ width: 200, height: 100, resizeMode: "contain", marginTop: 20 }}
        accessibilityLabel='Icon'
      />

      <ImageBackground
        source={{ uri: "https://images.pexels.com/photos/15286/pexels-photo.jpg" }}
        style={{ width: "100%", height: 200, resizeMode: "cover", marginTop: 20 }}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: 16,
    backgroundColor: "dodgerblue",
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
