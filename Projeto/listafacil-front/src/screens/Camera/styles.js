import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        backgroundColor: "#000000",
        height: "100%"
    },
    camera: {
        width: "100%",
        height: "75%",
        marginTop: 60
    },
    contentButtons: {
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "18%"
    },
    buttonFlip: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff50",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50
    },
    buttonFlipOn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9370DB",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50
    },
    buttonCapture: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9370DB",
        margin: 20,
        height: 70,
        width: 70,
        borderRadius: 50
    },
    screenModal: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%"
    },
    contentModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20
    },
    closeButton: {
        position: "absolute",
        top: Platform.OS === 'ios' ? 50 : 10,
        left: 2,
        margin: 10
    },
    nextButton: {
        position: "absolute",
        bottom: Platform.OS === 'ios' ? 50 : 10,
        right: 2,
        margin: 10
    },
    imgPhoto: {
        width: "100%",
        height: 400,
        borderWidth: 3,
        borderColor: "#ffffff"
    },
    contentLoading: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",

    },
    imageLoading: {
        marginBottom: 40,
        left:-8,
        width: 100,
        height:100
    }
  });

  export default styles