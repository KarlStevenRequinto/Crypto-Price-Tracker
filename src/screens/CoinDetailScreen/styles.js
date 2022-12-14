import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  priceDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
});
export default styles;
