import React  from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function TabNameView(props){
    const {navigation} = props;
    return (
        <View style={styles.content}>
            <Text style={styles.textNameView}>{props.nameView}</Text>
            {typeof navigation == "undefined" ? (
                <Text></Text>
            ) : (
                <TouchableOpacity
                    style={styles.contentProfile}
                    onPress={() => {
                        navigation.navigate("Perfil");
                    }}
                >
                    <MaterialCommunityIcons name={"account"} color={"#000000"} size={24} />
                </TouchableOpacity>
            )}
        </View>
    )
}