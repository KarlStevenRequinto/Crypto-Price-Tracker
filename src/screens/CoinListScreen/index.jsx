import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CoinItem from "../../components/CoinItem";
import data from "../../assets/data/cryptocurrencies";

const CoinListScreen = () => {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <FlatList
        data={data}
        renderItem={(itemdata) => {
          return (
            <CoinItem
              name={itemdata.item.name}
              image={itemdata.item.image}
              mCapRank={itemdata.item.market_cap_rank}
              symbol={itemdata.item.symbol}
              priceChangePctg={itemdata.item.price_change_percentage_24h}
              currentPrice={itemdata.item.current_price}
              mrketCap={itemdata.item.market_cap}
            />
          );
        }}
      />
    </View>
  );
};

export default CoinListScreen;

const styles = StyleSheet.create({});
