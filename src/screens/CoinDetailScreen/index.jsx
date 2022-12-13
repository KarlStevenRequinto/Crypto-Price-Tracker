import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Coin from "../../assets/data/crypto";
const CoinDetailScreen = () => {
  return (
    <View>
      <PageHeader
        coinImage={Coin.image.small}
        coinSymbol={Coin.symbol.toUpperCase()}
        coinMrketCap_Rank={Coin.market_data.market_cap_rank}
      />
    </View>
  );
};

export default CoinDetailScreen;

const styles = StyleSheet.create({});
