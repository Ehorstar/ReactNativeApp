import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";

import { useState } from "react";
import AppModal from './AppModal/AppModal';
import Button from './Button/Button';

const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefanstefancik-91227.jpg&fm=jpg",
          }}
          style={styles.img}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 20, color: "white" }}>Welcome back!</Text>
          <Text style={{ fontSize: 25, color: "white" }}>John Doe</Text>
        </View>

        <Button
          style={{ marginLeft: "auto" }}
          variant="none"
          icon={<AntDesign name="bell" size={40} color="white" />}
          onPress={() => setVisible(true)}
        />
        <AppModal visible={visible} onClose={() => setVisible(false)}>
          <Text>No messages.</Text>
        </AppModal>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    padding: 12,
  },
  img: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

export default Header;
