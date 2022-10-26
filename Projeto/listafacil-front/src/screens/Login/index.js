import React, {useContext, useState} from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {StatusBar} from "expo-status-bar";
import {Login} from "../../services/api/Login";
import {AuthContext} from "../../contexts/auth";
 
export default function Index({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { sessionLogin } = useContext(AuthContext);

  const logado = async () => {
    let busca = await Login(email, password);
    if (typeof busca.message != "undefined") {
        setMessage(busca.message);
    } else {
        sessionLogin(busca["token"]);
        navigation.reset({
            index: 0,
            routes: [{name: "Index"}]
        });
    }
  }

  const userRegister = () => {
    navigation.navigate("Inscreva-se")
  }
 
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../img/carrinhoCompra.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          textAlign="center"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          textAlign="center"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Text style={styles.errorMessage}>{message}</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={() => logado()}>
          <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => userRegister()}>
        <Text style={styles.loginText}>Inscreva-se</Text>
      </TouchableOpacity>

    </View>
  );
}
 
