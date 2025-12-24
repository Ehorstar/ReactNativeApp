import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#007bff",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primary: {
    backgroundColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  danger: {
    backgroundColor: "#dc3545",
  },
  none: {
    backgroundColor: "transparent",
  },
  white: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});

export default styles;
