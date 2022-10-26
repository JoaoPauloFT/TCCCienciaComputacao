import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CheckBox from "expo-checkbox";

export default function ItemListProduct(props){
    const {product, action, isCheck, idProd, edit} = props;
    const [checked, onChange] = useState(isCheck);

    return (
        <View style={styles.content}>
            {!edit ? (
                <>
                    <Text style={styles.text}>{product}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            action(idProd);
                        }}
                    >
                        <MaterialCommunityIcons name={"trash-can"} color={"#FF0000"} size={28} />
                    </TouchableOpacity>
                </>
            ) : (
                <View style={styles.contentCheckbox}>
                    <CheckBox
                        value={checked}
                        onValueChange={(resp) => {
                            onChange(resp);
                            action(idProd, resp);
                        }}
                        color={checked ? '#CDBCFF' : undefined}
                        style={styles.checkbox}
                    />
                    <Text style={styles.text}>{product}</Text>
                </View>
            )}
        </View>
    )
}