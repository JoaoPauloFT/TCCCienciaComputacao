import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFCF6", //"#FFFCF6", //#FFFAEC",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      left:-8,
      width: 100,
      height:100
    },
    
    inputView: {
      borderColor: "#9370DB",
      borderWidth:1,
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
    //   alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 7,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30
    },

    signIn:{
      height: 30,
      marginBottom: 30,
      top:-60,
      left:100
    },

    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#CDBCFF",
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

  export default styles