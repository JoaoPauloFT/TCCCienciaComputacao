import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        paddingTop: 50,
        height: "60%",
        alignItems: "center",
        top: 70,
        borderStyle: "solid",
        borderWidth: 10,
        borderColor: "#FFFCF6",
        borderRadius: 30,
        backgroundColor: "#fff",
    },
    textInfoName: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        paddingTop: 50,
    },
    textInfoEmail: {
        fontSize: 18,
        color: "#ffffff",
        paddingTop: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 120,
        backgroundColor: "#9370DB",
        alignSelf: "center"
    },
    loginText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    contentImage: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        left:-8,
        width: 100,
        height:100
    },
    imageProfile: {
        borderRadius: 100,
        width: 120,
        height: 120
    },
    contentImageProfile : {
        backgroundColor: "#c7c6c6",
        borderRadius: 100,
        // padding: 8,
        // marginRight: 15,
        borderStyle: "solid",
        borderColor: "#ffffff",
        borderWidth: 3
    },

    perfilLabel: {
        height: Platform.OS === 'ios' ? "100%" : "auto",
        top: Platform.OS === 'ios' ? 55 : 0,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },

    returnButton:{
        left:10,
        height: "100%",
        position: "absolute",
        top: Platform.OS === 'ios' ? 55 : 15,
        paddingLeft: 10,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },

    headerBackground: {
        width: "100%",
        height: Platform.OS === 'ios' ? 100 : 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        backgroundColor: "#9370DB",
        alignSelf: "center"
    },
  });

  export default styles