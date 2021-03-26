import { StyleSheet } from "react-native";

import { scale } from "../../utils";
import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: scale(2),
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: scale(10),
  },
  form: {
    width: "80%",
  },
  wrapInput: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 5,
    marginVertical: scale(5),
  },
  input: {
    paddingVertical: scale(2),
    paddingHorizontal: scale(5),
  },
  button: {
    backgroundColor: COLORS.main,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 5,
    alignItems: "center",
    paddingVertical: scale(2),
  },
  textButton: {
    color: COLORS.background,
    fontWeight: "bold",
  },
});

export default styles;
