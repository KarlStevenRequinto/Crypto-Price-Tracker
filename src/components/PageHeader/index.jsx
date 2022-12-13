import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../assets/data/crypto";
import styles from "./styles";

const PageHeader = ({ coinImage, coinSymbol, coinMrketCap_Rank }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={25} color="white" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: coinImage }} style={{ width: 25, height: 25 }} />
        <Text style={styles.symbol}>{coinSymbol}</Text>
        <Text style={styles.mrketCapRank}>#{coinMrketCap_Rank}</Text>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default PageHeader;
