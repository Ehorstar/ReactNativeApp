import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { transactions } from "../../data/transactions";

const Transactions = () => {
  return (
    <View style={styles.transactions}>
      <Text style={styles.transactionsText}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.left}>
              <Image source={item.icon} style={styles.icon} />

              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>

            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactions: {
    padding: 16,
  },

  transactionsText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,

    
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
});

export default Transactions;
