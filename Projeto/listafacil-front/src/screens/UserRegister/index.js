import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity, TextInput
} from "react-native";
import styles from "./styles";
import {StatusBar} from "expo-status-bar";
import {UserRegister} from "../../services/api/User";
 
    export default function Index({navigation}) {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");
        const [message, setMessage] = useState("");

    
      const goToIndexScreen = async () => {
        let resp = await UserRegister(name, email, password);
        if (typeof resp !== "undefined") {
            navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
            })
        } else {
            setMessage(resp);
        }
      }
     
      return (
        <View style={styles.container}>

          <Text style={styles.signInHeader}>Registre-se</Text>

          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nome"
              textAlign="center"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setName(name)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              textAlign="center"
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

          <TouchableOpacity style={styles.signUpBtn} onPress={() => goToIndexScreen()}>
            <Text style={styles.loginText}>Concluir Registro</Text>
          </TouchableOpacity>
        </View>
      );
    }