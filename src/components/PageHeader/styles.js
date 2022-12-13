import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  mrketCapRank: {
    color: "white",
    backgroundColor: "#585858",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  symbol: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
    alignSelf: "center",
  },
});

export default styles;
