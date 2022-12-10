import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
const CoinItem = () => {
  return (
    <View style={styles.coinContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.titleContainer}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
            </View>
            <Text style={{ color: "white" }}>BTC</Text>
            <AntDesign name="caretdown" size={12} style={styles.icon} />
            <Text style={{ color: "white" }}>1.02 %</Text>
          </View>
        </View>
      </View>
      <View></View>
      <View>
        <Text style={{ color: "white" }}>56,998,33</Text>
        <Text style={{ color: "white" }}>Mcap 1,079 T</Text>
      </View>
    </View>
  );
};

export default CoinItem;
