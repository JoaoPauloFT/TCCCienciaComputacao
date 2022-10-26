import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: "100%",
        width: "100%",
    },
    textNoData: {
        width: "90%",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    contentData: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listShopping: {
        width: "80%",
        marginTop: 30,
        marginBottom: 30
    },
    contentModal: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.8)",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    bodyModal: {
        marginVertical: "auto",
        height: "auto",
        width: "80%",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        justifyContent: "center",
    },
    titleModal: {
        fontSize: 22,
        fontWeight: "bold",
        padding: 15,
        color: "#9370DB"
    },
    textButtonModal: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 15,
        color: "#9370DB"
    },
    textInput: {
        fontSize: 18,
        padding: 5,
        borderBottomColor: "#CDBCFF",
        borderBottomWidth: 1,
        marginHorizontal: 15,
    },
    contentCheckbox: {
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    textCheckbox: {
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: "bold"
    },
    buttonModal: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
  });

  export default styles