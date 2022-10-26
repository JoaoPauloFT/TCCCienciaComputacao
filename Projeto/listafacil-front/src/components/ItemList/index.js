import React  from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ItemList(props){
    const {title, dateList} = props;
    return (
        <View style={styles.content}>
            <View style={styles.content1}>
                <MaterialCommunityIcons name={"clipboard-list"} color={"#9370DB"} size={32} />
                <Text style={styles.text}>{title}</Text>
            </View>
            <Text style={styles.text}>{dateList}</Text>
        </View>
    )
}