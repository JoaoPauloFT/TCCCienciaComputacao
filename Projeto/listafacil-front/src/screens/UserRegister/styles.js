import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFCF6",
      alignItems: "center",
      justifyContent: "center",
    },
    
    inputView: {
      bottom: 8,
      borderColor: "#9370DB",
      borderWidth:1,
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 7,
    },
   
    signInHeader: {
      bottom: 20,
      fontSize: 35,
      marginBottom: 120
    },

    signIn:{
      height: 30,
      marginBottom: 30,
      top:-60,
      left:100
    },
   
    signUpBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#CDBCFF",
    },

    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      borderColor: "#9370DB",
      borderWidth:1
    },

    loginText: {
        color: "#ffffff",
        fontWeight: "bold",
    },

    errorMessage: {
        color: "#c60000",
        fontWeight: "bold",
        fontSize: 16
    },
  });

  export default registerStyles