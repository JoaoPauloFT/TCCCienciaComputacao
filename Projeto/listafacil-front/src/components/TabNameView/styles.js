import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        display: "flex",
        top: 0,
        height: Platform.OS === 'ios' ? 100 : 60,
        backgroundColor: "#9370DB",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textNameView : {
        paddingLeft: 15,
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
        top:Platform.OS === 'ios' ? 15 : 0
    },
    contentProfile : {
        backgroundColor: "#c7c6c6",
        borderRadius: 50,
        padding: 8,
        marginRight: 15,
        top:Platform.OS === 'ios' ? 15 : 0
    }
  });

  export default styles