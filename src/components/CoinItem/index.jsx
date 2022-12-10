import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { marketCapHandler } from "../../utils/MarketCaps";
const CoinItem = ({
  name,
  image,
  mCapRank,
  mrketCap,
  symbol,
  priceChangePctg,
  currentPrice,
}) => {
  const prctColor = priceChangePctg < 0 ? "#ea3943" : "#16c784";
  const iconName = priceChangePctg < 0 ? "caretdown" : "caretup";
  return (
    <View style={styles.coinContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.titleContainer}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {mCapRank}
              </Text>
            </View>
            <Text style={{ color: "white" }}>{symbol.toUpperCase()}</Text>
            <AntDesign
              name={iconName}
              size={12}
              style={[styles.icon, { color: prctColor }]}
            />
            <Text style={{ color: prctColor }}>
              {priceChangePctg.toFixed(2)} %
            </Text>
          </View>
        </View>
      </View>
      <View></View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.title}>{currentPrice.toFixed(2)}</Text>
        <Text style={{ color: "white" }}>
          Mcap {marketCapHandler(mrketCap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
