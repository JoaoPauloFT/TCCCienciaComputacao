import styles from "./styles";
import {TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FloatingButtonDelete(props){
    const {action} = props;
    return (
        <TouchableOpacity
            style={styles.content}
            onPress={action}
        >
            <MaterialCommunityIcons name={"trash-can"} color={"#ffffff"} size={30} />
        </TouchableOpacity>
    )
}