import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";
import { scale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapContent: {
    alignItems: "center",
  },
  content: {
    backgroundColor: COLORS.background,
    borderRadius: scale(2),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
    padding: scale(5),
    marginVertical: scale(2),
    width: "90%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
