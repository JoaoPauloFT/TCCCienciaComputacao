import React, {useState} from "react";
import {TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddItemList(props){
    const {actionButton, placeholder } = props;

    const [text, setText] = useState("");

    const add = () => {
        actionButton(text);
        setText("");
    }

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={text}
                placeholderTextColor="#75757E"
                onChangeText={(value) => setText(value.trim())}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={add}
            >
                <Ionicons name={"add"} color={"#000000"} size={35} />
            </TouchableOpacity>
        </View>
    )
}