import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Coin from "../../assets/data/crypto";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";

import styles from "./styles";
export const { width: SIZE } = Dimensions.get("window");
export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];
const CoinDetailScreen = () => {
  const backgroundColor =
    Coin.market_data.price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const iconName =
    Coin.market_data.price_change_percentage_24h < 0
      ? "caret-down"
      : "caret-up";
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
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
              style={[styles.priceChange, { backgroundColor: backgroundColor }]}
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

        <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
        <ChartDot style={{ backgroundColor: "blue" }} />
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailScreen;
