import React, {useContext, useEffect, useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../../contexts/auth";
import styles from "./styles";
import {UserInfoByToken} from "../../services/api/User";
import {LinearGradient} from "expo-linear-gradient";

export default function Index({navigation}){
    const { token, sessionLogout } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    async function feactGet() {
        let info = await UserInfoByToken(token);
        setNome(info["name"]);
        setEmail(info["email"]);
    }
    let arrow = "←";

    const ShoppingList = () => {
        navigation.reset({
            index:1,
            routes: [{name: "TabMenu"}]
        })
      }

    useEffect(() => {
        feactGet();
    }, [])

    function logout() {
        sessionLogout(token);
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
    }

    return (
        <View>
            {nome ? (
                <>
                    <View style={styles.headerBackground}>
                        <Text style={styles.perfilLabel}>Perfil</Text>
                        <Text style={styles.returnButton} onPress={() => ShoppingList()}>{arrow}</Text>
                    </View>
                        
                    <LinearGradient
                        colors={['#9370DB', '#CDBCFF', '#9370DB', '#9370DB']}
                        start={{x:0.5,y:0}}
                        end={{x:0.5,y:1}}
                        style={styles.content}
                    >
                            <View style={styles.contentImageProfile}>
                                <Image style={styles.imageProfile} source={require("../../img/avatar.jpeg")} />
                            </View>
                            <Text style={styles.textInfoName}>{nome}</Text>
                            <Text style={styles.textInfoEmail}>{email}</Text>
                    </LinearGradient>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => logout()}>
                            <Text style={styles.loginText}>Sair</Text>
                        </TouchableOpacity>
                </>
            ) : (
                <View style={styles.contentImage}>
                    <Image style={styles.image} source={require("../../img/carrinhoCompra.png")} />
                </View>
            )}
        </View>
    )
}