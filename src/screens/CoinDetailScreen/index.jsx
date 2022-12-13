import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Coin from "../../assets/data/crypto";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
const CoinDetailScreen = () => {
  const backgroundColor =
    Coin.market_data.price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const iconName =
    Coin.market_data.price_change_percentage_24h < 0
      ? "caret-down"
      : "caret-up";
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <PageHeader
        coinImage={Coin.image.small}
        coinSymbol={Coin.symbol.toUpperCase()}
        coinMrketCap_Rank={Coin.market_data.market_cap_rank}
      />
      <View>
        <Text style={{ color: "white", fontSize: 15 }}>{Coin.name}</Text>
        <View style={styles.priceDataContainer}>
          <Text style={styles.currentPrice}>
            ${Coin.market_data.current_price.usd}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 4,
              paddingHorizontal: 3,
              paddingVertical: 5,
              backgroundColor: backgroundColor,
            }}
          >
            <Ionicons name={iconName} size={15} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 17,
              }}
            >
              {Coin.market_data.price_change_percentage_24h.toFixed(2)} %
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
