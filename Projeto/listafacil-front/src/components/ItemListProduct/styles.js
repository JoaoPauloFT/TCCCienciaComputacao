import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        display: "flex",
        marginBottom: 20,
        height: 60,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#CDBCFF"
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        paddingRight: 10,
    },
    contentCheckbox: {
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        marginRight: 10
    }
  });

  export default styles