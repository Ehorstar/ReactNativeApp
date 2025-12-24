import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.name,
          { textDecorationLine: product.buy ? "line-through" : "none",
           color: product.buy ? "gray" : "black",
           },
        ]}
      >
        {product.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    //Android
    elevation: 4,
    //IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  name: {
    fontSize: 18,
  },
});

export default ProductItem;
