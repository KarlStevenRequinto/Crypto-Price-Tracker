import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
  coinContainer: {
    backgroundColor: "#121212",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: "center",
  },
  titleContainer: {
    borderRadius: 4,
    backgroundColor: "#585858",
    marginRight: 5,
    paddingHorizontal: 5,
  },
  icon: { alignSelf: "center", marginRight: 5 },
});

export default styles;
