import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const RootLayout = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "dodgerblue" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            title: "About App",
            headerTitleAlign: "center",
            headerRight: () => (
              <Text>
                <AntDesign name="aliwangwang" size={24} color="white" />
              </Text>
            ),
            headerLeft: () => {
              return (
                <Pressable onPress={() => router.back()}>
                  <MaterialCommunityIcons
                    name="minecraft"
                    size={24}
                    color="white"
                  />
                </Pressable>
              );
            },
          }}
        />
      </Stack>
      <View style={styles.footer}>
        <Text>Root Layout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
});

export default RootLayout;
