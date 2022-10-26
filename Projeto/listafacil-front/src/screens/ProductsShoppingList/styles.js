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
        marginTop: 20,
        height: "90%"
    },
    textButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff"
    },
    contentData: {
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "80%"
    },
    listShopping: {
        width: "80%",
        marginTop: 30,
        marginBottom: 30
    },
    contentButton: {
        backgroundColor: "#9370DB",
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "80%"
    }
  });

  export default styles